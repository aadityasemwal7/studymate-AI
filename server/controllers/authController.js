import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// generating jwt token 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    })
}

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: "all fields are mandatory!" })
        }

        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(400).json({ message: "user already exists, please login!" })
        }

        const hashed_password = await bcrypt.hash(password, 10)

        const user = await User.create({
            name: name,
            email: email,
            password: hashed_password,
        })

        return res.status(201).json({
            message: "User Registered",
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })

    } catch (err) {
        return res.status(500).json({ message: `${err.message}` })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).json({ message: "both email and password are mandatory!" })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({ message: "This user does'nt exists, invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({ message: "This user does'nt exists, invalid credentials" })
        }

        res.status(200).json({
            message: "Login successful",
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });

    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}