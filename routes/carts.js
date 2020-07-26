const express = require('express');
const cartsRepo = require('../repositories/carts');

const router = express.Router();

// Recieve a POST request to add an item to a cart
router.post('/cart/products', async (req, res) => {
  // Figure out the cart
  let cart;
  if (!req.session.cartId) {
    cart = await cartsRepo.create({ items: [] });
    req.session.cartId = cart.id;
  } else {
    cart = await cartsRepo.getOne(req.session.cartId);
  }

  const existingItem = cart.items.find(item => item.id === req.body.productId);
  if (existingItem) {
    // Either increment quantity for existing product 
    existingItem.quantity++;
  } else {
    // or add a new product to items array
    cart.items.push({ id: req.body.productId, quantity: 1 });
  }
  await cartsRepo.update(cart.id, {
    items: cart.items
  });
  

  res.send('Product added');
});

// Recieve a GET request to show all items in cart


// Receive a POST request to delete an item from a cart

module.exports = router;

