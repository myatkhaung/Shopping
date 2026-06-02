require('dotenv').config();
const { Telegraf } = require('telegraf');

const botToken = process.env.TELEGRAM_BOT_TOKEN;
if (!botToken) {
  console.error('Missing TELEGRAM_BOT_TOKEN in environment');
  process.exit(1);
}

const bot = new Telegraf(botToken);

bot.start((ctx) => {
  ctx.reply('Welcome to the Telegram Shop Mini App! Use /wallet, /products, or /orders to continue.');
});

bot.help((ctx) => {
  ctx.reply('Available commands: /start, /wallet, /products, /orders, /support');
});

bot.command('wallet', (ctx) => {
  ctx.reply('Your wallet balance is being retrieved...');
});

bot.command('products', (ctx) => {
  ctx.reply('Here are the available products.');
});

bot.command('orders', (ctx) => {
  ctx.reply('Fetching your recent orders...');
});

bot.launch().then(() => {
  console.log('Telegram bot started');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
