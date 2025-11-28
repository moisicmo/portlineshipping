"use client";
import { Ship, Plane, Truck } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      icon: Ship,
      title: "Transporte Marítimo",
      description: "FCL, LCL, consolidado y rutas internacionales puerta a puerto.",
      img: "/ship.png",
    },
    {
      icon: Plane,
      title: "Transporte Aéreo",
      description: "Cargas urgentes, courier y logística aérea de alta velocidad.",
      img: "/airplane.png",
    },
    {
      icon: Truck,
      title: "Transporte Terrestre",
      description: "Cobertura nacional e internacional en carretera.",
      img: "/truck.png",
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* TITULO */}
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
          Nuestros Servicios
        </h2>

        <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
          Soluciones logísticas integrales por aire, mar y tierra diseñadas para tu comercio internacional.
        </p>

        {/* GRID */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, img }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group rounded-2xl shadow-lg overflow-hidden bg-black/80"
            >
              {/* IMAGEN DE FONDO */}
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>

              {/* CONTENIDO */}
              <div className="relative p-8 flex flex-col gap-4 text-left">
                <Icon className="w-12 h-12 text-white drop-shadow" />

                <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                  {title}
                </h3>

                <p className="text-gray-200 text-sm leading-relaxed">
                  {description}
                </p>

                <button className="mt-4 w-max px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium shadow-md transition">
                  Más información
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
