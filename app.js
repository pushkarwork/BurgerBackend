import express from "express";
import dotenv from "dotenv";
const app = express()
import userRoutes from "./routes/user.js"
import { connectPassport } from "./utils/Provider.js";
dotenv.config({
    path: "./config/config.env"
})

connectPassport();


app.use("/api/v1", userRoutes);


export default app;