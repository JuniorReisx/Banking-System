import express from "express";
import chalk from "chalk";
import "dotenv/config";
import { corsMiddleware, jsonParserMiddleware } from "./middlewares/index.js";
import { tryConnectSequelize } from "./database/db.js";
import { userRouter } from "./routers/user.routes.js";

const server = express();
const PORT = process.env.PORT || 4000;

server.use(corsMiddleware);
server.use(jsonParserMiddleware);

server.use("/bank", userRouter);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/bank`);
  console.log(chalk.green("Success!"));

  tryConnectSequelize();
});
