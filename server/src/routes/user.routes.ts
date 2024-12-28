import { Router } from "express"
import { RegisterHandler } from "../controllers/authController";


const router = Router();

// Routes
router.post("/register",RegisterHandler)

export default router;
