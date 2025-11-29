/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function AppBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-20 w-full px-4 md:px-8 py-2 flex items-center justify-between shadow bg-white/90 backdrop-blur sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="block h-16">
        <img
          src="/logo.jpg"
          alt="Portline Shipping"
          className="h-full w-auto object-contain"
        />
      </Link>
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        <Link href="/#services" className="hover:text-primary transition">Servicios</Link>
        <Link href="/#about" className="hover:text-primary transition">Nosotros</Link>
        <Link href="/blog" className="hover:text-primary transition">Blog</Link>
        <Link href="/#contact" className="hover:text-primary transition">Contacto</Link>


      </nav>

      {/* Mobile toggle */}
      <button
        className="md:hidden p-2 rounded hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-6 md:hidden">
          <Link href="/#services" className="hover:text-primary" onClick={() => setIsOpen(false)}>Servicios</Link>
          <Link href="/#about" className="hover:text-primary" onClick={() => setIsOpen(false)}>Nosotros</Link>
          <Link href="/blog" className="hover:text-primary" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/#contact" className="hover:text-primary" onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>
      )}
    </header>
  );
}
