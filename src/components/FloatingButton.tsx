"use client";
import Image from "next/image";
import { useState } from "react";

// Tipado de ítems
interface SupportItem {
  icon?: string;
  image?: string;
  title: string;
  url: string;
}

// Props del widget
interface SupportWidgetProps {
  color?: string;                // Color del widget
  items: SupportItem[];          // Lista de botones
}

export default function SupportWidget({
  color = "#2563eb",
  items
}: SupportWidgetProps) {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Ventana flotante */}
      <div
        className={`fixed bottom-28 right-6 z-50 transition-all duration-300 
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
        `}
      >
        <div className="w-80 bg-white rounded-xl shadow-xl borde overflow-hidden">

          {/* HEADER */}
          <div
            className="text-white p-4 flex items-center gap-3 relative"
            style={{ backgroundColor: color }}
          >
            {/* Avatar con check */}
            <div className="relative">
              <Image
                src="https://i.imgur.com/xe4NJNc.jpg"
                alt="Avatar"
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
                unoptimized
              />
              {/* Check azul */}
              <Image
                src="https://i.imgur.com/7duqWaf.png"
                alt="Verified Check"
                width={20}
                height={20}
                className="absolute -bottom-1 -right-1"
                unoptimized
              />
            </div>

            {/* Información */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="font-semibold">Chibbi</p>
                {/* Online */}
                <span className="w-3 h-3 bg-green-400 rounded-full border border-white"></span>
              </div>

              <p className="text-sm opacity-90">Hola, ¿Cómo te puedo ayudar?</p>
            </div>
          </div>

          {/* ITEMS / OPCIONES */}
          <div className="p-3 flex flex-col gap-2 min-h-60 max-h-[280px] overflow-y-auto">
            {items.map((item) => (
              <button
                key={item.title}
                onClick={() => window.open(item.url, "_blank")}
                className="w-full flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={24}
                    height={24}
                    unoptimized
                  />
                ) : (
                  <span className="text-xl">{item.icon}</span>
                )}

                <span className="font-medium">{item.title}</span>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Texto flotante */}
      <p className="fixed bottom-22 right-7 z-50 text-black font-bold text-sm transition-all duration-300">
        SOPORTE
      </p>

      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed bottom-6 right-6 z-50
          text-white
          w-16 h-16 rounded-full
          shadow-xl border-
          flex items-center justify-center
          hover:opacity-90 transition duration-200
        "
        style={{ backgroundColor: color }}
      >
        <span
          className={`
            transform transition-transform duration-300
            ${open ? "rotate-180 scale-110" : "rotate-0 scale-100"}
          `}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <span className="text-4xl">💬</span>
          )}
        </span>
      </button>
    </>
  );
}
