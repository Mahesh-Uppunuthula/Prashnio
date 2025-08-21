import { Hono } from "hono";
import { test } from "./test";

export const v1 = new Hono();
v1.route("/test", test);
