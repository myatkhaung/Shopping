const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminOrder', required: true },
    amountMMK: { type: Number, required: true },
    method: { type: String, required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    transactionId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AdminPayment', PaymentSchema);
