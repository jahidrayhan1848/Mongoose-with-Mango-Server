import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import userRoute from "./models/user/user.routes";
import routes from "./models/routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())
app.use(routes)

// Database connect
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});


// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("🚀 Server is running with Express + Mongoose!");
});

