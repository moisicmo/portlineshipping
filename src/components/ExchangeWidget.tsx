/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

export default function ExchangeWidget() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/usdt-bob")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <div
      className="
        fixed top-24 right-6 z-40
        bg-white shadow-lg border border-gray-200
        rounded-xl px-4 py-2 text-sm font-medium
        min-w-[160px]
      "
    >
      <p className="text-gray-700 font-semibold mb-1">USDT → BOB</p>
      <p className="text-green-600 text-base">Compra: {data.buy} BOB</p>
    </div>
  );
}
