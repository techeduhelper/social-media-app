import userModel from "../models/userModel.js"
import { hassPassword, comparePassword, isValidEmail } from "../utils/helper.js"
import JWT from "jsonwebtoken"


export const registerController = async (req, res) => {
    try {
        const { name, username, mobno, password } = req.body
        if (!username) {
            return res.send({ message: "Please provide an email" })
        }
        if (!mobno) {
            return res.send({ message: "Please provide Mobile no" })
        }
        if (!password) {
            return res.send({ message: "Please provide a Password" })
        }

        if (!isValidEmail(username)) {
            return res.send({ message: "Provide email in correct Format" })
        }
        const existingUser = await userModel.findOne({ username })
        if (existingUser) {
            return res.send({ message: "Already registered Email" })
        }
        const existingUserMobno = await userModel.findOne({ mobno })
        if (existingUserMobno) {
            return res.send({ message: "Already Registered Mobile no" })
        }
        // hasspassword 
        const hashedPassword = await hassPassword(password)
        const user = new userModel({ name, username, mobno, password: hashedPassword })
        try {
            await user.save();
            return res.status(200).send({
                success: true,
                message: 'Registered Successfully',
                user
            })
        } catch (error) {
            return res.status(400).send("Error in register")
        }
    } catch (error) {
        return res.status(400).send({
            success: false,
            message: 'Error in register',
            error
        })
    }

}



export const loginController = async (req, res) => {
    try {
        const { usernameOrMobile, password } = req.body;

        if (!usernameOrMobile || !password) {
            return res.status(400).json({ message: "Provide email/username/mobile and password" });
        }
        const user = await userModel.findOne({
            $or: [{ username: usernameOrMobile }, { mobno: usernameOrMobile }],
        });

        if (!user) {
            return res.send({ message: "User doesn't exist" });
        }

        const matchPassword = await comparePassword(password, user.password);
        if (!matchPassword) {
            return res.status(401).json({ message: "Incorrect Password" });
        }

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        user.password = undefined;
        res.status(200).json({
            success: true,
            message: "Login Successfully",
            user,
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in login",
            error: error.message,
        });
    }
}