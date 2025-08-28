import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = new Hono();

app.get("/", (c) => c.text("Hello, world!"));

app.get("/about", (c) => {
  return c.json({
    Message: "Athiphat",
  });
});

app.get("/profile", async (c) => {
  const profiles = await prisma.profile.findMany();
  return c.json(profiles); // ส่งข้อมูลจริงออกไปเป็น JSON
});

export default app;
