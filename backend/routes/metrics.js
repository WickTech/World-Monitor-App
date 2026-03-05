const express = require("express");

const { generateMetrics } = require("../services/dataService");

const router = express.Router();

router.get("/", async (_req, res) => {
  const data = generateMetrics();
  res.json(data);
});

module.exports = router;
