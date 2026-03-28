# Qorvex Bank

A modern, secure banking dashboard built with Next.js that empowers users to connect multiple bank accounts, view real-time balances, transfer money seamlessly, and track transaction history all in one intuitive interface.

## 🚀 Features

- 🔐 Secure user authentication and authorization
- 🏦 Connect multiple bank accounts via Plaid integration
- 💰 Real-time balance tracking and total balance overview
- 💸 Easy money transfers using Dwolla
- 📊 Transaction history with pagination and search
- 📱 Responsive design for mobile and desktop
- 🎨 Modern UI with Tailwind CSS and Radix UI components

## 🛠 Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS, Radix UI
- **Backend Services:** Appwrite (database and auth), Plaid (bank connections), Dwolla (payments)
- **Charts:** Chart.js, React-Chartjs-2
- **Forms:** React Hook Form, Zod validation
- **Monitoring:** Sentry

## 📋 Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Appwrite account and project
- Plaid developer account
- Dwolla developer account

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/qorvex-bank.git
   cd qorvex-bank
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your API keys:

   ```env
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   NEXT_PUBLIC_APPWRITE_URL=your_appwrite_url
   PLAID_CLIENT_ID=your_plaid_client_id
   PLAID_SECRET=your_plaid_secret
   DWOLLA_KEY=your_dwolla_key
   DWOLLA_SECRET=your_dwolla_secret
   SENTRY_DSN=your_sentry_dsn
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 📖 Usage

- **Sign Up/Sign In:** Create an account or log in to access your dashboard.
- **Connect Banks:** Use the Plaid integration to link your bank accounts securely.
- **View Balances:** See your total balance across all connected accounts.
- **Transfer Money:** Initiate transfers between accounts or to external recipients via Dwolla.
- **Transaction History:** Browse and search through your transaction history with pagination.
