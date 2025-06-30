import { Router } from "express";
import accessController from "../../controllers/access.controller";
const router = Router();

router.post("/shop/signup", accessController.signUp);

export default router;
