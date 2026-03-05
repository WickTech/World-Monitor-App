import { useEffect, useState } from "react";

import { fetchMetrics } from "../api/api";
import BarChart from "../components/BarChart";
import DashboardCards from "../components/DashboardCards";
import LineChart from "../components/LineChart";
import MarketHighlights from "../components/MarketHighlights";
import PieChart from "../components/PieChart";
import WorldNewsCorner from "../components/WorldNewsCorner";

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const data = await fetchMetrics();
        if (isMounted) {
          setMetrics(data);
          setError("");
        }
      } catch (_requestError) {
        if (isMounted) {
          setError("Unable to load metrics. Start backend on port 5000.");
        }
      }
    };

    loadData();
    const poller = setInterval(loadData, 300000);

    return () => {
      isMounted = false;
      clearInterval(poller);
    };
  }, []);

  if (error) return <div className="state-message">{error}</div>;
  if (!metrics) return <div className="state-message">Loading dashboard...</div>;

  return (
    <main className="dashboard">
      <h1>World Monitor Analytics Dashboard</h1>
      <DashboardCards metrics={metrics} />
      <section className="charts-grid">
        <article className="chart-panel">
          <h3>Traffic Trend</h3>
          <LineChart labels={metrics.labels} data={metrics.traffic} />
        </article>
        <article className="chart-panel">
          <h3>Regional Sales</h3>
          <BarChart labels={metrics.regionLabels} data={metrics.regionSales} />
        </article>
        <article className="chart-panel">
          <h3>Device Usage</h3>
          <PieChart labels={metrics.deviceLabels} data={metrics.deviceUsage} />
        </article>
        <MarketHighlights bestStock={metrics.bestStock} updatedAt={metrics.updatedAt} />
      </section>
      <WorldNewsCorner newsItems={metrics.worldNews} />
    </main>
  );
}
