import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();
const app = new Hono();

app.get("/", (c) => c.text("Hello, world!"));

app.get("/about", (c) => {
  return c.json({ Message: "Athiphat" });
});

app.get("/profile", async (c) => {               
  const profile = await prisma.profile.findMany(); 
  return c.json(profile);
});

app.post("/profile", async (c) => {

  const body = await c.req.json();
  console.log('input of profile ', body);
  console.log('body.password (original) ', body.password);

  // encode password
  const passwordHash = await bcrypt.hash(body.password, 10);
  console.log('hashed password ', passwordHash);

  // replace password with hashed version
  body.password = passwordHash;
  console.log('body (with hashed password)', body);

  // save to database
  await prisma.profile.create({ data: body });

  // output response
  return c.json({
    message: "create profile completed",
  });
});

export default app;
