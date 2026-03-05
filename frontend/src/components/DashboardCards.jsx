export default function DashboardCards({ metrics }) {
  const cards = [
    { label: "Users", value: metrics.users },
    { label: "Sales", value: metrics.sales },
    { label: "Revenue", value: `$${metrics.revenue.toLocaleString()}` },
    { label: "Active Sessions", value: metrics.activeSessions },
    { label: "API Requests", value: metrics.apiRequests.toLocaleString() }
  ];

  return (
    <section className="stats-grid">
      {cards.map((card) => (
        <article className="card" key={card.label}>
          <p className="card-label">{card.label}</p>
          <h2 className="card-value">{card.value}</h2>
        </article>
      ))}
    </section>
  );
}
