import express from "express";
import { protect } from "../middleware/authMiddleWare.js";
import { getUserDate, storeRecentSearchedCities } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", protect, getUserDate);
userRouter.post("/store-recent-search", protect, storeRecentSearchedCities);

export default userRouter;