import express from "express";
import { registerController } from "../controllers/authController.js";


// rest object
const router = express.Router();

// POST API
router.post('/register', registerController)


export default router;