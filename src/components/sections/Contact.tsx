"use client";
import { Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section id="contact" className="relativ py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      <div className="relative max-w-4xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Contáctanos
        </h2>
        <p className="text-gray-600 text-center mt-3 mb-12 max-w-xl mx-auto text-lg">
          Cuéntanos tus necesidades logísticas y nuestro equipo te responderá lo antes posible.
        </p>

        {/* FORMULARIO */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formulario enviado (aquí puedes conectar tu backend).");
          }}
          className="bg-white/80 backdrop-blur-xl shadow-xl border border-white/40 p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Input Nombre */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Nombre Completo</label>
            <input
              type="text"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition"
              placeholder="Ej: Juan Pérez"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* Input Email */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Correo Electrónico</label>
            <input
              type="email"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition"
              placeholder="Ej: juan@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Input Mensaje */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea
              required
              rows={4}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition"
              placeholder="Cuéntanos cómo podemos ayudarte…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
          </div>

          {/* Botón Enviar */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow transition flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
