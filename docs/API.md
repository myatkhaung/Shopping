# API Reference

This document provides an overview of the API endpoints available in the Telegram Shop Mini App.

## Admin API

### Health
- `GET /admin/health`
  - Returns service status.

### Products
- `GET /admin/products`
  - List all active products.
- `POST /admin/products`
  - Create a new product.
  - Payload: `{ name, description, priceMMK, slug, category }`
- `PUT /admin/products/:id`
  - Update a product by ID.
- `DELETE /admin/products/:id`
  - Delete a product by ID.

### Orders
- `GET /admin/orders`
  - List all orders.
- `GET /admin/orders/:id`
  - Get a single order by ID.
- `PATCH /admin/orders/:id/status`
  - Update order status.
  - Payload: `{ status }`

### Payments
- `GET /admin/payments`
  - List all payment records.
- `POST /admin/payments`
  - Record a payment.
  - Payload: `{ orderId, amountMMK, method, status, transactionId }`

## Telegram Bot Commands
- `/start` — Initialize the user and welcome message.
- `/products` — Show available digital products.
- `/wallet` — Display the current wallet balance.
- `/orders` — Show recent Telegram orders.
