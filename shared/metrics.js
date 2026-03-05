const { fetchBestPerformingStock, fetchWorldNews } = require("./liveData");

const generateBaseMetrics = () => ({
  users: 12400,
  sales: 8300,
  revenue: 65000,
  activeSessions: 498,
  apiRequests: 120300,
  traffic: [30, 45, 28, 80, 99, 43, 50],
  regionSales: [2200, 3100, 1800, 1200],
  deviceUsage: [64, 26, 10],
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  regionLabels: ["Americas", "Europe", "Asia", "Africa"],
  deviceLabels: ["Desktop", "Mobile", "Tablet"]
});

const generateMetrics = async () => {
  const [bestStock, worldNews] = await Promise.all([fetchBestPerformingStock(), fetchWorldNews()]);

  return {
    ...generateBaseMetrics(),
    bestStock,
    worldNews,
    updatedAt: new Date().toISOString()
  };
};

module.exports = { generateMetrics };
