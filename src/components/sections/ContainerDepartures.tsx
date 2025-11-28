"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const departures = [
  {
    country: "China",
    date: "10 de Noviembre, 2025",
    description: "Salida programada con carga consolidada LCL para importadores medianos.",
    status: "en curso"
  },
  {
    country: "China",
    date: "15 de Noviembre, 2025",
    description: "FCL completo para clientes con alta demanda.",
    status: "completado"
  },
  {
    country: "China",
    date: "22 de Noviembre, 2025",
    description: "Salida terrestre desde Sao Paulo con coordinación aduanera.",
    status: "pendiente"
  }
];

export function ContainerDepartures() {
  return (
    <section id="containers" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">

        {/* TITULO */}
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900">
          Últimas Salidas de Contenedores
        </h2>
        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
          Revisa los movimientos recientes y estados de salida para planificar tus importaciones.
        </p>

        {/* TIMELINE */}
        <div className=" space-y-4">

          {departures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative"
            >

              {/* CARD */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <h4 className="text-lg font-semibold text-gray-900">{item.country}</h4>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <CalendarDays className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                {item.status === "en curso" && (
                  <span className="text-green-600 font-semibold text-sm">● En curso</span>
                )}
                {item.status === "pendiente" && (
                  <span className="text-yellow-600 font-semibold text-sm">● Pendiente</span>
                )}
                {item.status === "completado" && (
                  <span className="text-gray-600 font-semibold text-sm">● Completado</span>
                )}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
