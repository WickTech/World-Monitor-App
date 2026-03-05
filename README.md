# World Monitor App

A full-stack starter for a WorldMonitor-style analytics dashboard using:

- **Backend**: Node.js + Express REST API (for local development)
- **Frontend**: React + Vite + Chart.js
- **Deployment**: Vercel static frontend + serverless `/api/*` endpoints

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

## Deploy on Vercel

This repo is now deployable on Vercel.

1. Push this repository to GitHub.
2. In Vercel, create a **New Project** and import the repo.
3. Leave the **Root Directory** as the repository root.
4. Vercel will use `vercel.json`:
   - Build command: `npm run build --prefix frontend`
   - Output directory: `frontend/dist`
5. Deploy.

After deploy:

- Frontend is served from Vercel static hosting.
- API endpoints are served by Vercel serverless functions:
  - `/api/health`
  - `/api/metrics`

### Optional environment variable

Use this only when frontend should call a different backend URL:

```bash
VITE_API_URL=https://your-api.example.com
```

By default:

- Local dev frontend calls `http://localhost:5000`
- Production frontend calls same-origin `/api/metrics` (Vercel functions)
