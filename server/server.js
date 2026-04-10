import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("StudyMate AI backend running...");
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => console.log(err));