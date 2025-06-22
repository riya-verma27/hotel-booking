import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express';
import clerkWebHooks from "./controllers/clerkWebHooks.js";
import expressRaw from "express"; // just to be clear it's express itself
import userRouter from "./routes/userRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import hotelRouter from "./routes/hotelRoutes.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

connectDB();
connectCloudinary();
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

app.use('/api/user', userRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/bookings', bookingRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
