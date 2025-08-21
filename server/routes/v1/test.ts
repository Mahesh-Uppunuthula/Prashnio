import { Hono } from "hono";

export const test = new Hono().get("/", (c) =>
  c.json({
    message: "test",
  })
);
