const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY || "demo";

const alphaVantageUrl = (params) => {
  const search = new URLSearchParams({ ...params, apikey: ALPHA_VANTAGE_API_KEY });
  return `https://www.alphavantage.co/query?${search.toString()}`;
};

const asNumber = (value) => {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
};

const fetchJson = async (url) => {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "World-Monitor-App/1.0"
    }
  });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  return response.json();
};

const fetchBestPerformingStock = async () => {
  try {
    const payload = await fetchJson(alphaVantageUrl({ function: "TOP_GAINERS_LOSERS" }));
    const topGainer = payload?.top_gainers?.[0];

    if (!topGainer) {
      throw new Error("No top gainer returned");
    }

    return {
      symbol: topGainer.ticker,
      name: topGainer.ticker,
      changePercent: asNumber((topGainer.change_percentage || "").replace("%", "")),
      price: asNumber(topGainer.price),
      volume: asNumber(topGainer.volume),
      source: "Alpha Vantage"
    };
  } catch (_error) {
    return {
      symbol: "N/A",
      name: "Market data unavailable",
      changePercent: null,
      price: null,
      volume: null,
      source: "Fallback"
    };
  }
};

const fetchWorldNews = async () => {
  try {
    const payload = await fetchJson(
      alphaVantageUrl({
        function: "NEWS_SENTIMENT",
        topics: "financial_markets",
        sort: "LATEST",
        limit: "4"
      })
    );

    const items = Array.isArray(payload?.feed)
      ? payload.feed.slice(0, 4).map((item) => ({
          title: item.title,
          url: item.url,
          source: item.source,
          timePublished: item.time_published
        }))
      : [];

    if (!items.length) {
      throw new Error("No news returned");
    }

    return items;
  } catch (_error) {
    return [
      {
        title: "Live world news is temporarily unavailable.",
        url: "https://www.alphavantage.co/documentation/",
        source: "Fallback",
        timePublished: null
      }
    ];
  }
};

module.exports = { fetchBestPerformingStock, fetchWorldNews };
