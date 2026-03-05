# World Monitor App

A full-stack starter for a WorldMonitor-style analytics dashboard using:

- **Backend**: Node.js + Express REST API
- **Frontend**: React + Vite + Chart.js

## Project structure

```
backend/
frontend/
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

### Optional environment variable

You can point frontend to another API base URL:

```bash
VITE_API_URL=http://localhost:5000
```
