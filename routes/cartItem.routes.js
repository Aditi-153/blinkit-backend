import express from "express";
import { userProtect } from "../middleware/userAuth";

const router = express.Router();

router.post("/add-item", userProtect);
router.get("/get-cart-item", userProtect);
router.patch("/update-quantity", userProtect);
router.delete("/delete-item", userProtect);
