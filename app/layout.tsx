import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Lahris | Velas que acolhem", description: "Velas artesanais para momentos que merecem ficar." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
