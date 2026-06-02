# Deployment Guide

This document outlines how to deploy the Telegram Shop Mini App monorepo.

## Prerequisites

- Docker and Docker Compose installed
- GitHub repository configured with branch `main`
- MongoDB connection string available
- Telegram bot token from @BotFather
- Optional payment provider keys

## Deployment Steps

1. Clone the repository:
   ```bash
git clone https://github.com/myatkhaung/Shopping.git
cd Shopping
```
2. Copy the example environment file and configure your secrets:
   ```bash
cp .env.example .env
```
3. Start the deployment stack with Docker Compose:
   ```bash
cd infra/docker
docker compose up -d --build
```
4. Seed digital products:
   ```bash
docker compose run --rm seed-products
```
5. Verify services:
   - `http://localhost:5000` — shop API
   - `http://localhost:5001` — admin API
   - `http://localhost:3000` — customer panel
   - `http://localhost:3001` — admin panel

## Docker Compose Services

- `mongo` — MongoDB database
- `shop-api` — Customer API backend
- `admin-api` — Admin backend
- `telegram-bot` — Telegram bot service
- `customer-panel` — Customer web UI
- `admin-panel` — Admin web UI
- `seed-products` — One-time product seeder

## Environment Variables

Set the following values in `.env`:

- `MONGODB_URI`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_ADMIN_CHANNEL_ID`
- `VITE_API_BASE_URL`
- `PAYMENT_PROVIDER_KEY`
- `PAYMENT_PROVIDER_SECRET`
- `JWT_SECRET`

## CI/CD

- `.github/workflows/backend.yml` — installs and tests `apps/shop-api`
- `.github/workflows/frontend.yml` — builds `web/customer-panel` and `web/admin-panel`
- `.github/workflows/deploy.yml` — deploys via Docker Compose
