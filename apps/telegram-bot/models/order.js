const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'BotProduct', required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true, default: 1 },
        priceMMK: { type: Number, required: true },
      },
    ],
    totalMMK: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('BotOrder', OrderSchema);
