import { getAuth } from "@clerk/express";
import User from '../models/User.js';

export const protect = async (req, res, next) => {
    try {
        const auth = getAuth(req); // ✅ Extract Clerk auth

        if (!auth || !auth.userId) {
            return res.status(401).json({ success: false, message: "Not authenticated" });
        }

        const user = await User.findById(auth.userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        req.user = user;   // ✅ Needed in controllers like getUserBookings
        req.auth = auth;   // (optional) In case you use req.auth elsewhere

        next();
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
