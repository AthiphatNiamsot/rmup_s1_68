import { Hono } from "hono";
import  {PrismaClient} from "@prisma/client";
//import  {PrismaClient} from "../generated/prisma/client";

const prisma = new PrismaClient();

const app = new Hono();
app.get("/", (c) => c.text("Hello, word!"));
app.get("/about", (c) => {
  return c.json({
    Message: "Athiphat"
  });
});
app.get("/profile", () => {
   // logic
   const profile = prisma.profile.findMany();
   return profile;
});

export default app ;