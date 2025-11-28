"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-20 py-12 mt-20 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* IZQUIERDA — LOGO + DESCRIPCIÓN */}
        <div className="flex flex-col gap-4">
          <div className="px-6 py-3 bg-white rounded-2xl shadow-lg inline-flex items-center justify-center">
            <img src="/logo.jpg" alt="Portline Shipping" className="w-28 h-auto" />
          </div>
          <p className="text-gray-400 text-xs max-w-xs leading-relaxed">
            Soluciones logísticas internacionales por aire, mar y tierra.
            Comprometidos con la eficiencia y seguridad en cada envío.
          </p>
        </div>

        {/* CENTRO — ENLACES */}
        <div className="flex flex-col text-left md:items-center">
          <h4 className="text-white font-semibold mb-4 text-base">Enlaces</h4>
          <div className="flex flex-col gap-2">
            <Link href="/#services" className="hover:text-primary transition">
              Servicios
            </Link>
            <Link href="/#about" className="hover:text-primary transition">
              Nosotros
            </Link>
            <Link href="/blog" className="hover:text-primary transition">
              Blog
            </Link>
            <Link href="/#contact" className="hover:text-primary transition">
              Contacto
            </Link>

          </div>
        </div>

        {/* DERECHA — CONTACTO + UBICACIÓN + REDES */}
        <div className="flex flex-col gap-4 text-left md:items-end">

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-2">Contacto</h4>
            <p>Email: info@portlineshipping.com</p>
            <p>Tel: +1 234 567 890</p>
            <p>WhatsApp: +1 234 567 891</p>
            <h4 className="text-white font-semibold mb-2">Ubicación</h4>
            <p>Calle 123, Zona Portuaria</p>
            <p>Ciudad, País</p>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © 2025 Portline Shipping SRL — Todos los derechos reservados
      </div>
    </footer>
  );
}
