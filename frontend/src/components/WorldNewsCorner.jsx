export default function WorldNewsCorner({ newsItems = [] }) {
  return (
    <aside className="news-corner">
      <h3>World News</h3>
      <ul>
        {newsItems.map((item) => (
          <li key={`${item.title}-${item.url}`}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>
            <span>{item.source}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
