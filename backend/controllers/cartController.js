const CartItem = require('../models/cartItemSchema');
const mongoose = require('mongoose');

// Get all cart items
const getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.find({}).sort({ createdAt: -1 });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single cart item
const getCartItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such cart item' });
  }

  try {
    const cartItem = await CartItem.findById(id);

    if (!cartItem) {
      return res.status(404).json({ error: 'No such cart item' });
    }

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new cart item
const createCartItem = async (req, res) => {
    const { imageSrc, title, canteen, price, qty } = req.body;
  
    try {
      // Check if the item already exists in the cart
      const existingCartItem = await CartItem.findOne({ title, canteen });
  
      if (existingCartItem) {
        // If it exists, update the quantity
        existingCartItem.qty += qty;
        const updatedCartItem = await existingCartItem.save();
        res.status(200).json(updatedCartItem);
      } else {
        // If it doesn't exist, create a new cart item
        const newCartItem = await CartItem.create({ imageSrc, title, canteen, price, qty });
        res.status(201).json(newCartItem);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

// Delete a cart item
const deleteCartItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such cart item' });
  }

  try {
    const cartItem = await CartItem.findOneAndDelete({ _id: id });

    if (!cartItem) {
      return res.status(400).json({ error: 'No such cart item' });
    }

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a cart item
const updateCartItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such cart item' });
  }

  try {
    const cartItem = await CartItem.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });

    if (!cartItem) {
      return res.status(400).json({ error: 'No such cart item' });
    }

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getCartItems,
  getCartItem,
  createCartItem,
  deleteCartItem,
  updateCartItem,
};
