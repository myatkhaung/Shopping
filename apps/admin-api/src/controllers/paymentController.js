const Payment = require('../models/payment');

exports.getPayments = async (req, res) => {
  const payments = await Payment.find().sort({ createdAt: -1 });
  res.json(payments);
};

exports.createPayment = async (req, res) => {
  const { orderId, amountMMK, method, status, transactionId } = req.body;
  if (!orderId || !amountMMK || !method) {
    return res.status(400).json({ error: 'orderId, amountMMK, and method are required' });
  }
  const payment = await Payment.create({ orderId, amountMMK, method, status, transactionId });
  res.status(201).json(payment);
};
