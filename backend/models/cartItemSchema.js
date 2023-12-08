const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({ 
    imageSrc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    canteen: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('cart', cartItemSchema);
