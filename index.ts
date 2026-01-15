import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello World From GHCR!"));

export default app;