import { AppBar } from "@/components/layout/AppBar";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import SupportWidget from "@/components/FloatingButton";
import ExchangeWidget from "@/components/ExchangeWidget";



export const metadata = {
  title: "Portline Shipping SRL — Envíos internacionales rápidos y seguros",
  description:
    "Portline Shipping te ofrece soluciones de envío internacional con seguimiento en tiempo real, atención personalizada y tarifas competitivas.",
  keywords: [
    "envíos internacionales",
    "importaciones",
    "courier",
    "envíos Bolivia",
    "paquetería",
    "portline shipping",
  ],

  // Favicon
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },

  // Open Graph (Facebook / WhatsApp / LinkedIn)
  openGraph: {
    title: "Portline Shipping — Envíos internacionales",
    description:
      "Servicio de courier internacional rápido, seguro y confiable.",
    url: "https://portlineshipping.vercel.app/",
    siteName: "Portline Shipping SRL",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Portline Shipping SRL",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Portline Shipping — Envíos internacionales",
    description:
      "Servicio de courier internacional rápido, seguro y confiable.",
    images: ["/logo.png"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <AppBar />
        <ExchangeWidget />
        <SupportWidget
          color="#DA072A"
          items={[
            {
              image: "/whatsapp.png",
              title: "WhatsApp",
              url: "https://wa.me/59171998243?text=👋%20Hola!%20Quiero%20más%20información."
            },
          ]}
        />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}