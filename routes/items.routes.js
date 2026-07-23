import express from "express";
import Item from "../models/items.model.js";
import { adminProtect, userProtect } from "../middleware/userAuth.js";
import { createItem, deleteItem, editItem, getAllItems } from "../controllers/items.controller.js";

const router = express.Router();

//admin 
router.post("/add-item",userProtect,adminProtect,createItem ) 
router.patch("/edit-item/:id",userProtect,adminProtect , editItem ) 
router.delete("/delete-item/:id",userProtect,adminProtect , deleteItem )


router.get("/get-allItems",getAllItems)



//user
// router.get("/get-Allitems", )
// router.get("/get-item", )


export default router;





