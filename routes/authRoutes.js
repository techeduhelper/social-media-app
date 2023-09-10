import express from "express";
import { loginController, registerController } from "../controllers/authController.js";
import { requireSignIn } from './../middlewares/jwt.js';


// rest object
const router = express.Router();

// POST REGISTER
router.post('/register', registerController)


// POST LOGIN
router.post('/login', loginController)

// GET Protected Routes
router.get('/protected', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
}
)

export default router;