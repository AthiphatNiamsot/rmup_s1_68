import { Hono } from "hono";
import { PrismaClient } from '@prisma/client'
import * as bcrypt from "bcrypt";

// import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

const app = new Hono();
app.get('/', (c) => c.text('Hono!'));
app.get('/about', (c) => { return c.json({ message: "Tanapat Nunkhong " }) });
app.get("/profile", async (c) => {
    // logic
    const profile = await prisma.profile.findMany();
    return c.json(profile);
});
app.post("/profile", async (c) => {
    //logic to create a new profile
    const body = await c.req.json();
    console.log('input of profile', body);
    console.log('body.password(original)', body.password);

   
    
    // ตรวจสอบว่ามี mobile หรือ cardId ซ้ำ
    const existingProfile = await prisma.profile.findFirst({
        where: {
            OR: [
                { mobile: body.mobile },
                { cardId: body.cardId }
            ]
        }
    });

    if (existingProfile) {
        let duplicatedFields = [];
        if (existingProfile.mobile === body.mobile) duplicatedFields.push('mobile');
        if (existingProfile.cardId === body.cardId) duplicatedFields.push('cardId');

        return c.json(
            { message: `ข้อมูลซ้ำ: ${duplicatedFields.join(', ')}` },
            500
        );
    }
    

    //encode password
    const passwordHash = await bcrypt.hash(body.password,18);
    console.log('hash.password(after)',passwordHash);
    body.password = passwordHash;
    console.log('body.password(replace)',body);


    //save to db
    body.status= false;
    const result = await prisma.profile.create({
        data:body
    });

   
    // output
     c.status(200);
    return c.json({
        message: "create profile completed",
        data: result
    })
});

export default app;