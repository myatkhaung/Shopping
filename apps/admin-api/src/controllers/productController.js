const Product = require('../models/product');

exports.getProducts = async (req, res) => {
  const products = await Product.find({ active: true }).sort({ createdAt: -1 });
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const { name, description, priceMMK, slug, category } = req.body;
  if (!name || !priceMMK || !slug) {
    return res.status(400).json({ error: 'name, priceMMK, and slug are required' });
  }
  const product = await Product.create({ name, description, priceMMK, slug, category });
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json({ success: true });
};
