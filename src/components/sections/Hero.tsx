"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full h-auto min-h-[520px] px-8 py-20 overflow-hidden bg-linear-to-br flex flex-col md:flex-row items-center md:items-start justify-between">

      {/* Fondo rojo difuso */}
      <div className="absolute -right-20 -top-10 w-[500px] h-[500px] opacity-[0.12] rotate-12 pointer-events-none select-none">
        <div className="w-full h-full bg-linear-to-br from-red-500 to-red-700 blur-3xl rounded-full"></div>
      </div>

      {/* TEXTO A LA IZQUIERDA (perfecto en móvil y desktop) */}
      <div className="relative z-10 w-full md:w-1/2 max-w-xl text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Soluciones logísticas internacionales
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Transporte aéreo, marítimo y terrestre con eficiencia, seguridad y soporte personalizado.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Operamos en toda Bolivia.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-primary hover:bg-primary-700 text-white rounded-lg font-semibold shadow-md transition">
            Cotizar envío
          </button>
          <button className="px-6 py-3 border border-gray-300 hover:bg-gray-100 rounded-lg font-semibold transition">
            Conocer más
          </button>
        </div>
      </div>

      {/* CONTAINER COLGANDO - RESPONSIVO */}
      <motion.img
        src="/container.png"
        alt="Container logístico"
        className="absolute md:w-[700px] w-[90%] h-auto right-0 top-0 pointer-events-none select-none md:block"
        
        initial={{ y: -300, rotate: -8, opacity: 0 }}
        animate={{
          y: -40,
          rotate: [-4, 2, -4],
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 12,
          duration: 1.2,
          rotate: {
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
      />
            {/* <motion.img
        src="/container.png"    // cambia el nombre según tu archivo
        alt="Container logístico"
        className="absolute right-10 top-0 w-[700px] h-auto pointer-events-none select-none"
        
        initial={{ y: -300, rotate: -8, opacity: 0 }}
        animate={{
          y: -40,
          rotate: [-4, 2, -4],
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 12,
          duration: 1.2,
          rotate: {
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror"
          }
        }}
      /> */}
    </section>
  );
}
