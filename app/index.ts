import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { encode, } from "punycode";
const prisma = new PrismaClient();

const app = new Hono();

app.get("/", (c) => c.text("Hello, world!"));

app.get("/about", (c) => {
  return c.json({
    Message: "Athiphat", });
});

app.get("/profile", async (c) => {               
  const profile = await prisma.profile.findMany(); 
  return c.json(profile);
});

app.post("/profile" , async (c) =>  {
  const body = await c.req.json();
  return c.json({Message: "Create profile complete"});

});

app.get("/profile/:id", async (c) => {
    const id = c.req.param("id");
    console.log (`profile id`,id );
    return c.json ({
        data: id
    });
});


export default app;