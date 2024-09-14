import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";

const hono = new OpenAPIHono({
    defaultHook: (result, c) => {
        if (result.success) {
            return;
        }

        return c.json({ code: 400, error: result.error }, 400);
    },
});
const app = hono.basePath("/api");

const PORT = process.env.PORT || 4000;

app.doc("/openapi-json", {
    openapi: "3.0.0",
    info: {
        version: "0.0.1",
        title: "nASM Auth Service",
    },
});
app.get("/doc", swaggerUI({ url: "/api/openapi-json" }));
app.openAPIRegistry.registerComponent("securitySchemes", "SessionCookie", {
    type: "apiKey",
    in: "cookie",
    name: "sessionId",
});

export default app;