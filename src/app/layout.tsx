import { AppBar } from "@/components/layout/AppBar";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import SupportWidget from "@/components/FloatingButton";



export const metadata = {
  title: "Portline Shipping — Landing Page",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AppBar />
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