const { generateMetrics } = require("../shared/metrics");

module.exports = async (_req, res) => {
  const data = await generateMetrics();
  res.status(200).json(data);
};
