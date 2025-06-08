import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express';
import clerkWebHooks from "./controllers/clerkWebHooks.js";
import expressRaw from "express"; // just to be clear it's express itself

connectDB();
const app = express();

// Apply CORS
app.use(cors());

// Clerk middleware
app.use(clerkMiddleware());

// 🟡 Clerk Webhook Route - requires raw body!
app.post("/api/clerk", express.raw({ type: "application/json" }), clerkWebHooks);

// Apply express.json() only AFTER the webhook route
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.send("API is working fine");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
