require("dotenv").config();
const app = require("./index");
import { Request, Response } from "express";

if (!process.env.APP_PORT) process.exit(1);
const port = process.env.APP_PORT;
if (!process.env.APP_NAME) process.exit(1);
const app_name = process.env.APP_NAME;

app.get("/", (req: Request, res: Response) => {
  res.send("👍");
});

app.listen(port, "localhost", () => {
  console.log(`[API/CDN SERVER] Running "${app_name}" on port ${port}`);
});
