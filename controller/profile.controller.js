import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
export const ProfileInfo = async (req, res, next) => {
  const { id } = req.params; // Get `id` from route parameters

  try {
    const user = await User.findById(id).select("-password"); // Exclude password
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const UpdateProfile = async (req, res, next) => {
    const { username, email } = req.body;
    console.log('username: ', username);
    console.log('email: ', email);
    const { id } = req.params; // Get `id` from route parameters
    // console.log('id::: ', id);

    // Check if at least one field is provided
    if (!username && !email) {
        return next(errorHandler(400, "Provide at least one field to update"));
    }

    // Create an object to hold the fields to be updated
    const updateFields = {};
    if (username) updateFields.username = username; // Add username to updateFields if provided
    if (email) updateFields.email = email; // Add email to updateFields if provided

    // Check for unique email if it's being updated
    if (email) {
        const existingUser = await User.findOne({ email });
        if (existingUser && existingUser._id.toString() !== id) {
            return next(errorHandler(400, "Email already in use"));
        }
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: updateFields }, // Use the dynamically constructed updateFields object
            { new: true, runValidators: true }
        ).select("-password");

        if (!updatedUser) {
            return next(errorHandler(404, "User not found"));
        }

        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user: updatedUser,
        });
    } catch (error) {
        next(error);
    }
};
  
  export const UpdatePassword = async (req, res, next) => {
    const { oldPassword, newPassword } = req.body;
    const { id } = req.params; // Get `id` from route parameters
  
    if (!oldPassword || !newPassword) {
      return next(errorHandler(400, "Old and new passwords are required"));
    }
  
    try {
      const user = await User.findById(id);
      if (!user) {
        return next(errorHandler(404, "User not found"));
      }
  
      const isPasswordMatch = await bcryptjs.compare(oldPassword, user.password);
      if (!isPasswordMatch) {
        return next(errorHandler(400, "Old password is incorrect"));
      }
  
      const hashedPassword = await bcryptjs.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
  
      res.status(200).json({
        success: true,
        message: "Password updated successfully",
      });
    } catch (error) {
      next(error);
    }
  };
  