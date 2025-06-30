import { Router } from "express";
import access from "./access";
import { apiKey, permission } from "../auth/checkAuth";

const router = Router();

router.use(apiKey);
router.use(permission("0000"));
router.use("/v1/api", access);

export default router;
