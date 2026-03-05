const formatNumber = (value) => {
  if (value == null) return "N/A";
  return Number(value).toLocaleString();
};

export default function MarketHighlights({ bestStock, updatedAt }) {
  return (
    <article className="chart-panel market-panel">
      <h3>Best Performing Stock</h3>
      <p className="stock-symbol">{bestStock?.symbol || "N/A"}</p>
      <p>Price: ${formatNumber(bestStock?.price)}</p>
      <p>
        Change: {bestStock?.changePercent == null ? "N/A" : `${bestStock.changePercent.toFixed(2)}%`}
      </p>
      <p>Volume: {formatNumber(bestStock?.volume)}</p>
      <p className="source">Source: {bestStock?.source || "Unknown"}</p>
      <p className="source">Updated: {new Date(updatedAt).toLocaleString()}</p>
    </article>
  );
}
