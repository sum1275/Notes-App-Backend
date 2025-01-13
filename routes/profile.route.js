import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  ProfileInfo,
  UpdateProfile,
  UpdatePassword,
} from "../controller/profile.controller.js";
const router = express.Router();

// Fetch user profile by ID
router.get("/:id", verifyToken, ProfileInfo);

// Update user profile by ID
router.put("/:id", verifyToken, UpdateProfile);

// Update user password by ID
router.put("/password/:id", verifyToken, UpdatePassword);
export default router;
