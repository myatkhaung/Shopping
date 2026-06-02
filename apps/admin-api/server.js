const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const productRoutes = require('./src/routes/products');
const orderRoutes = require('./src/routes/orders');
const paymentRoutes = require('./src/routes/payments');

app.use('/admin/products', productRoutes);
app.use('/admin/orders', orderRoutes);
app.use('/admin/payments', paymentRoutes);

app.get('/admin/health', (req, res) => {
  res.json({ status: 'Admin API is healthy' });
});

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:27017/telegram-shop';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Admin API connected to MongoDB');
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`Admin API listening on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Admin API MongoDB connection error:', error);
    process.exit(1);
  });
