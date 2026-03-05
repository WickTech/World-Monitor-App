const { generateMetrics } = require("../shared/metrics");

module.exports = (_req, res) => {
  res.status(200).json(generateMetrics());
};
