import { Router } from "express";
import accessController from "../../controllers/access.controller";
import { asyncHandler } from "../../auth/checkAuth";
const router = Router();

router.post("/shop/signup", asyncHandler(accessController.signUp));

export default router;
