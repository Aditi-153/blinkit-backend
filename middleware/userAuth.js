import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel";
import bcrypt from "bcrypt";

export const userProtect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({
        message: "please login first",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return res.status(400).json({
        message: "invalid token",
      });
    }

    const user = await User.findById(decoded.id).select("-password");

  

    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "failed to authorized",
    });
  }
};
