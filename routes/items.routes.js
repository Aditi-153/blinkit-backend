import express from "express";
import Item from "../models/items.model.js";
import { adminProtect } from "../middleware/userAuth.js";
import { createItem, deleteItem } from "../controllers/items.controller.js";

const router = express.Router();

//admin 
router.post("/add-item",adminProtect,createItem ) 
router.patch("/edit-item/:id",adminProtect ) 
router.delete("/delete-item/:id",adminProtect , deleteItem )
router.get("/get-allItems", adminProtect,)

//user
// router.get("/get-Allitems", )
// router.get("/get-item", )


export default router;


