const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//ProductSchema
const ProductSchema = new Schema({
    name: {type: String, require: true, unique: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    quantity: {type: Number, require: true},
    status: {type: Boolean, enum: [true, false], default: true},
    slug: {type: String, required: true, unique: true},
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema)