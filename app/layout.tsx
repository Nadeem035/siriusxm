import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "SiriusXM: Music, Sports, Talk & Podcasts, Live & On Demand",
  description:
    "The best in audio entertainment wherever you choose to listen—in your car, on your phone, at home on your TV, speakers, and other smart devices.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
