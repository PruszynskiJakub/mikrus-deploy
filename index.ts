import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  const secret = process.env.SAMPLE_SECRET ?? "not set";
  return c.text(`Hello World From GHCR! SAMPLE_SECRET: ${secret}`);
});

export default app;