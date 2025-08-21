import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";

import { v1 } from "./routes/v1";

const app = new Hono();

app.use(logger());
// server api routes when request starts with /api
app.basePath("/api").route("/v1", v1);

// serve static client from backend in production if the request does not start with /api
// app.use("/favicon.ico", serveStatic({ path: "./client/dist/favicon.ico" }));
app.use("*", serveStatic({ root: "./client/dist" }));
app.get("*", serveStatic({ path: "./client/dist/index.html" }));

export default app;
