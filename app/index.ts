import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();
const app = new Hono();

app.get("/", (c) => c.text("Hello, world!"));

app.get("/about", (c) =>
  c.json({
    Message: "Athiphat",
  })
);

app.get("/profile", async (c) => {
  const profile = await prisma.profile.findMany();
  return c.json(profile);
});

app.post("/profile", async (c) => {
  const body = await c.req.json();

  console.log("input of profile", body);
  console.log("body.password (original)", body.password);

  c.status(503);
  return c.json({
    message: "Service Unavailable",
    data: "server error",
  });

  const passwordHash = await bcrypt.hash(body.password, 10);
  console.log("hashed password", passwordHash);


  body.password = passwordHash;
  body.status = false;

  
  const createdProfile = await prisma.profile.create({
    data: body,
  });
  console.log("createdProfile", createdProfile);


  return c.json({
    message: "create profile completed",
    data: createdProfile,
  });
});

export default app;
