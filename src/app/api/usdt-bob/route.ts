/* eslint-disable @typescript-eslint/no-explicit-any */

function avg(list: number[]) {
  if (list.length === 0) return 0;
  return list.reduce((a, b) => a + b, 0) / list.length;
}

export async function GET() {
  try {
    const fetchData = async (tradeType: "BUY" | "SELL") => {
      const response = await fetch(
        "https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            page: 1,
            rows: 20,
            payTypes: [],
            asset: "USDT",
            fiat: "BOB",
            tradeType,
            transAmount: "1000",
            merchantCheck: true,
          }),
        }
      );

      const json = await response.json();

      if (!json.data || json.data.length === 0) return 0;

      // Tomar los primeros 5 resultados
      const prices = json.data
        .slice(0, 5)
        .map((x: any) => Number(x.adv.price));

      return Number(avg(prices).toFixed(2));
    };

    const buy = await fetchData("BUY");
    const sell = await fetchData("SELL");

    return Response.json({ buy, sell });
  } catch (e) {
    return Response.json(
      { error: "Error obteniendo datos" },
      { status: 500 }
    );
  }
}
