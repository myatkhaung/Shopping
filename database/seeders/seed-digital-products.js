const mongoose = require('mongoose');
require('dotenv').config();

const products = [
  {
    name: 'Telegram Premium',
    description: 'Unlock premium Telegram features with a fast, secure top-up offering.',
    priceMMK: 180000,
    slug: 'telegram-premium',
    category: 'Subscription',
    active: true,
  },
  {
    name: 'Telegram Stars',
    description: 'Send stars in Telegram chats to support creators and boost engagement.',
    priceMMK: 90000,
    slug: 'telegram-stars',
    category: 'Gift',
    active: true,
  },
  {
    name: 'Telegram Gift',
    description: 'Purchase Telegram gift credit instantly for friends and family.',
    priceMMK: 45000,
    slug: 'telegram-gift',
    category: 'Gift',
    active: true,
  },
];

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/telegram-shop';

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    priceMMK: Number,
    slug: String,
    category: String,
    active: Boolean,
  },
  { timestamps: true, collection: 'products' }
);

const Product = mongoose.model('Product', ProductSchema);

async function main() {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  for (const product of products) {
    await Product.findOneAndUpdate({ slug: product.slug }, product, { upsert: true, new: true });
  }

  console.log('Digital products seeded successfully');
  await mongoose.disconnect();
}

main().catch((error) => {
  console.error('Seeding failed:', error);
  process.exit(1);
});
