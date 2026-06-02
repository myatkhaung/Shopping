require('dotenv').config();
const { Telegraf } = require('telegraf');
const mongoose = require('mongoose');
const Product = require('./models/product');
const Order = require('./models/order');
const Wallet = require('./models/wallet');

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const mongoUri = process.env.MONGODB_URI || 'mongodb://mongo:27017/telegram-shop';

if (!botToken) {
  console.error('TELEGRAM_BOT_TOKEN is required');
  process.exit(1);
}

const bot = new Telegraf(botToken);

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Telegram bot connected to MongoDB');

    bot.start(async (ctx) => {
      const userId = ctx.from.id.toString();
      await Wallet.findOneAndUpdate(
        { userId },
        { $setOnInsert: { userId, balance: 0 } },
        { upsert: true, new: true }
      );
      ctx.reply(`Welcome to Telegram Shop! Use /products to browse digital products, /wallet to check your balance, and /orders to view your orders.`);
    });

    bot.command('products', async (ctx) => {
      const products = await Product.find().limit(10);
      if (!products.length) {
        return ctx.reply('No products are available at the moment.');
      }

      const lines = products.map((product) => `• ${product.name}: ${product.priceMMK.toLocaleString()} MMK\n${product.description}`);
      ctx.reply(lines.join('\n\n'));
    });

    bot.command('wallet', async (ctx) => {
      const userId = ctx.from.id.toString();
      const wallet = await Wallet.findOne({ userId });
      if (!wallet) {
        return ctx.reply('Wallet not found. Use /start to initialize your account.');
      }
      ctx.reply(`Wallet balance: ${wallet.balance.toLocaleString()} MMK`);
    });

    bot.command('orders', async (ctx) => {
      const userId = ctx.from.id.toString();
      const orders = await Order.find({ userId }).sort({ createdAt: -1 }).limit(5);
      if (!orders.length) {
        return ctx.reply('You have no recent orders.');
      }
      const lines = orders.map((order) => {
        const itemNames = order.items.map((item) => `${item.name} x${item.quantity}`).join(', ');
        return `#${order._id}\n${itemNames}\nTotal: ${order.totalMMK.toLocaleString()} MMK\nStatus: ${order.status}`;
      });
      ctx.reply(lines.join('\n\n'));
    });

    bot.launch().then(() => console.log('Telegram bot started'));
  })
  .catch((error) => {
    console.error('MongoDB connection failed for Telegram bot:', error);
    process.exit(1);
  });

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
