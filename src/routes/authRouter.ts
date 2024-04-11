import express from 'express';
import authController from "../controllers/auth/AuthController";
const router = express.Router();

router.all("/login", authController.login);
router.all("/register", authController.signUp);

export default router;