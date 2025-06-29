import compression from "compression";
import express, { Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import instanceMongodb from "./dbs/init.mongodb";
import { checkOverLoad } from "./utils/check.connect";
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

instanceMongodb;
checkOverLoad();

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to the Express + TypeScript Server!",
    metaData: "hehe".repeat(100000),
  });
});

export default app;
