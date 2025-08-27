"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hono_1 = require("hono");
var client_1 = require("@prisma/client");
//import  {PrismaClient} from "../generated/prisma/client";
var prisma = new client_1.PrismaClient();
var app = new hono_1.Hono();
app.get("/", function (c) { return c.text("Hello, word!"); });
app.get("/about", function (c) {
    return c.json({
        Message: "Athiphat"
    });
});
app.get("/profile", function () {
    // logic
    var profiles = prisma.Profile.findMany();
    return c.text("profiles");
});
exports.default = app;
