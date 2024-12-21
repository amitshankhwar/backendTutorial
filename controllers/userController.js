import { User } from "../models/userSchema.js";

export const registerController = async (req, res) => {
  const userData = req.body;

  await User(userData).save();

  return res.status(201).json({
    success: true,
    message: "user created successfully",
  });
};
