import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const app = express();
app.use(express.json());

// Database connect
connectDB();

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("🚀 Server is running with Express + Mongoose!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
