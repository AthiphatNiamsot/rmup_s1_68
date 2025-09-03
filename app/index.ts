import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

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


export default app;
