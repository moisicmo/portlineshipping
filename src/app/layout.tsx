import { AppBar } from "@/components/layout/AppBar";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";



export const metadata = {
  title: "Portline Shipping — Landing Page",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AppBar />
        <main className="flex-1">{children}</main>
              <Footer />
      </body>
    </html>
  );
}