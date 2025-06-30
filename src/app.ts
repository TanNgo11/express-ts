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

//handling error
app.use((req, res, next) => {
  const error = new Error("Not Found") as Error & { status?: number };
  error.status = 404;
  console.log("🚀 ~ app.use ~ error:", error);
  next(error);
});

// General Error Handler middleware
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    message: error.message || "Internal Server Error",
  });
});

export default app;
