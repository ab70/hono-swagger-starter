import { cors } from "hono/cors";
import app from "./app/app";
import "./app/routes/api";

const PORT = process.env.PORT || 4000;
app.use(cors());

export default {
  fetch: app.fetch,
  port: PORT
}
