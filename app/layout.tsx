import type { Metadata } from "next";
import { Inter, Oswald, Tajawal } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Non-Stop Gym | Premium Martial Arts Training",
  description: "Elite martial arts training in Judo, Karate, Boxing & Kickboxing. Join our community and transform your body and mind.",
  keywords: ["gym", "martial arts", "judo", "karate", "boxing", "kickboxing", "fitness"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${oswald.variable} ${tajawal.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
