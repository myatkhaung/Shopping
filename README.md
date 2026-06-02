# Telegram Shop Mini App

A professional Full-stack Telegram Mini App with a Node.js/Express backend and a React + Tailwind CSS frontend. This repo is structured to support a clean separation between backend and frontend code for easier development and deployment.

## Project Overview

This project delivers a Telegram-integrated shopping experience through a Telegram Mini App. Users can browse products, manage their wallet, checkout securely, and complete orders without leaving Telegram.

## Key Features

- Seamless Telegram Mini App integration
- Product catalog with category browsing
- User wallet dashboard for balance and top-up
- Order creation and automated admin notification
- Secure checkout flow with payment tracking

## Wallet & Payment System

The wallet system is designed to manage user balances, display current wallet status, and support payment operations through the app. Payments are recorded and processed server-side, while Telegram notifications keep users and administrators informed.

## Tech Stack

- Backend: Node.js, Express.js
- Frontend: React, Tailwind CSS
- Database: MongoDB
- Telegram Integration: Telegraf / Node-Telegram-Bot-API
- Deployment: Docker / VS Code Codespaces (optional)

## Project Structure

```text
/
├── backend/          # Node.js Express server code
├── frontend/         # React application source code
├── .gitignore        # Git ignore rules
├── LICENSE           # Project license
└── README.md         # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas or local MongoDB instance
- Telegram Bot Token from @BotFather

### Setup

1. Clone the repository:
   ```bash
git clone https://github.com/myatkhaung/Shopping.git
cd Shopping
```
2. Install dependencies for backend and frontend:
   ```bash
cd backend && npm install
cd ../frontend && npm install
```
3. Create environment files:
   - `backend/.env`
   - `frontend/.env`

   Add the required API keys and database connection information.

4. Run the application:
   ```bash
cd backend && npm run dev
cd ../frontend && npm run dev
```

### Notes

- Do not commit `.env` files or secrets.
- Keep `node_modules`, build artifacts, and local environment files out of version control.

