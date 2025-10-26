import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Fira_Code, Space_Grotesk } from "next/font/google";
import type React from "react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ricardo Castro - Frontend Developer",
  description:
    "Frontend Developer especializado en React.js, Next.js y React Native. Ingeniero en Nanotecnología con experiencia en desarrollo web y móvil.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${firaCode.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
