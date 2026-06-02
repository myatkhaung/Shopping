# API Reference

This document provides an overview of the API endpoints available in the Telegram Shop Mini App.

## Shop API

- `GET /api/health`
  - Returns service status.

- `GET /api/products`
  - Returns a product catalog.

- `POST /api/orders`
  - Creates a new order for the authenticated user.

- `GET /api/wallet`
  - Returns wallet balance and transaction history.

## Admin API

- `GET /admin/health`
  - Returns admin service status.

- `GET /admin/orders`
  - Returns recent orders and sales metrics.

- `POST /admin/products`
  - Creates or updates product data.

## Telegram Bot

- `/start` - Starts the bot and displays the welcome message.
- `/wallet` - Displays wallet balance and payment options.
- `/products` - Lists available products.
- `/orders` - Shows order history.
- `/support` - Connects the user to customer support.
