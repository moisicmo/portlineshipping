"use client";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Laura Fernández",
    company: "Importadora Andina SRL",
    quote:
      "Portline Shipping nos ayudó a optimizar nuestros envíos internacionales. Su atención personalizada es excelente.",
  },
  {
    name: "Carlos Méndez",
    company: "Global Tools Ltda.",
    quote:
      "Gracias a su servicio marítimo eficiente, pudimos reducir tiempos de entrega considerablemente.",
  },
  {
    name: "María Quispe",
    company: "Quispe Exportaciones",
    quote:
      "Siempre confiamos en Portline para nuestros despachos, cumplen con cada detalle logístico.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-linear-to-br overflow-hidden"
    >

      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* TÍTULO */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Testimonios
        </h2>

        <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
          Conoce lo que dicen nuestros clientes sobre su experiencia con Portline Shipping.
        </p>

        {/* GRID */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-default border border-white/40"
            >
              {/* COMILLAS DECORATIVAS */}
              <Quote className="absolute -top-4 -left-4 w-16 h-16 text-gray-200 opacity-40" />

              {/* TEXTO */}
              <p className="text-gray-800 text-sm leading-relaxed mb-6 italic">
                “{t.quote}”
              </p>

              {/* INFO CLIENTE */}
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-base">
                  {t.name}
                </p>
                <p className="text-xs text-gray-500">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
