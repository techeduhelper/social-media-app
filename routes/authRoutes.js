import express from "express";
import { loginController, registerController } from "../controllers/authController.js";


// rest object
const router = express.Router();

// POST REGISTER
router.post('/register', registerController)


// POST LOGIN
router.post('/login', loginController)

export default router;