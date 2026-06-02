# Deployment Guide

This document outlines the deployment strategy for the Telegram Shop Mini App.

## Deployment Targets

- `apps/shop-api` — Primary customer-facing shop API.
- `apps/admin-api` — Admin management API.
- `apps/telegram-bot` — Telegram bot service.
- `web/customer-panel` — Customer web application.
- `web/admin-panel` — Admin web application.

## Recommended Deployment Flow

1. Build frontend applications.
2. Run backend services behind a reverse proxy.
3. Use environment variables for secrets and service connections.
4. Deploy bot service with a process manager or container runtime.

## Environment Variables

- `TELEGRAM_BOT_TOKEN`
- `MONGODB_URI`
- `PAYMENT_PROVIDER_KEY`
- `PAYMENT_PROVIDER_SECRET`
- `JWT_SECRET`
- `VITE_API_BASE_URL`

## CI/CD

Please refer to `.github/workflows` for build and deployment automation.
