const express = require('express')

const {
    createCartItem,
    getCartItems,
    getCartItem,
    deleteCartItem,
    updateCartItem,
} = require('../controllers/cartController')

const router = express.Router();

router.post('/', createCartItem)
router.get('/', getCartItems)
router.get('/:id', getCartItem)
router.delete('/:id', deleteCartItem)
router.patch('/:id', updateCartItem)


module.exports = router;