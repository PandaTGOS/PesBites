const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recordSchema = new Schema({ 
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
}, {timestamps: true})




//MODEL -> Applies the schema to db
module.exports = mongoose.model('cartSchema', recordSchema)
