# World Monitor App

A full-stack starter for a WorldMonitor-style analytics dashboard using:

- **Backend**: Node.js + Express REST API (for local development)
- **Frontend**: React + Vite + Chart.js
- **Deployment**: Vercel static frontend + serverless `/api/*` endpoints
- **Live data**: Alpha Vantage (top performers + world/market news)

## Project structure

```
api/                  # Vercel serverless functions
backend/              # Local Express backend
frontend/             # React app
shared/               # Shared data generators
```

## Run locally

### 1) Start backend

```bash
cd backend
npm install
npm start
```

Backend runs on `http://localhost:5000` and serves `/api/metrics`.

### 2) Start frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.

## Live finance + world news data

The app requests real-time-ish market and news data from Alpha Vantage and merges it into `/api/metrics`:

- Best performing stock (symbol, change %, price, volume)
- News list for world/financial markets (shown in dashboard corner)

### Configure API key

Set this env var in local shell and in Vercel project settings:

```bash
ALPHA_VANTAGE_API_KEY=your_key_here
```

If key is missing or rate-limited, the UI displays safe fallback values.

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel, create a **New Project** and import the repo.
3. Leave the **Root Directory** as the repository root.
4. Vercel uses `vercel.json`:
   - Install command: `npm install --prefix frontend`
   - Build command: `npm run build --prefix frontend`
   - Output directory: `frontend/dist`
5. In Vercel → Project Settings → Environment Variables, add:
   - `ALPHA_VANTAGE_API_KEY`
6. Deploy.

After deploy:

- Frontend is served from Vercel static hosting.
- API endpoints are served by Vercel serverless functions:
  - `/api/health`
  - `/api/metrics`

### Optional frontend environment variable

Use this only when frontend should call a different backend URL:

```bash
VITE_API_URL=https://your-api.example.com
```

By default:

- Local dev frontend calls `http://localhost:5000`
- Production frontend calls same-origin `/api/metrics` (Vercel functions)
