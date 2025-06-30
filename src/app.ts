import compression from "compression";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import instanceMongodb from "./dbs/init.mongodb";
import router from "./routes";
import { checkOverLoad } from "./utils/check.connect";
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

instanceMongodb;
// checkOverLoad();

app.use("/", router);

export default app;
