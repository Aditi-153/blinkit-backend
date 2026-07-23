import Item from "../models/items.model.js";
import User from "../models/userModel.js";
import cartItem from "../models/cartItem.model.js";
import Cart from "../models/cart.model.js";

export const addItem = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findById(id);

    if (!item) {
      return res.status(400).json({
        message: "item not found!",
      });
    }

    const cartItem = await cartItem.create({
      user: req.user_id,
      Itemprice: item.price,
      item: id,
    });

    const cartPrice = await Cart.findOne({
      user: req.user_id,
    });

    const price = cartPrice.totalPrice;

    const newPrice = price + cartItem.Itemprice;

    const cart = await cart.create({
      user: req.user_id,
      item: [cartItem._id],
      totalAmount: newPrice,
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to add item",
    });
  }
};
