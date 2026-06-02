const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: '' },
    priceMMK: { type: Number, required: true },
    slug: { type: String, required: true, unique: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, collection: 'products' }
);

module.exports = mongoose.model('BotProduct', ProductSchema);
