import express from "express";
import User from "../models/userModel";
import { userLogin, userLogout, userRegister } from "../controllers/user.controller";

const router = express.Router();

router.post("/login",userLogin );
router.post("/register", userRegister );
router.post("/logout", userLogout);

export default router;

