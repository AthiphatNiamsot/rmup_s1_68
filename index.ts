import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => c.text("Hello, word!"));
app.get("/.about", (c) => {
  return c.json({
    Message: "About Page"
  });
});

export default app ;