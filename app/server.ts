import { serve } from "@hono/node-server";
import app from "./index";

serve(app, (info) => {
    console.log(`server is running on ${info.port}`);

});
