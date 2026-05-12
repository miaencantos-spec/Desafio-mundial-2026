import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desafío Mundial 2026 | PredicFi - El Gran Torneo de Pronósticos",
  description: "Participa en el Desafío Mundial 2026 con PredicFi. Crea tu grupo, predice los resultados y gana premios reales. El sistema de pronósticos más transparente.",
  metadataBase: new URL("https://desafiomundial2026.website"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Tag (gtag.js) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=AW-18158755283" 
          strategy="afterInteractive" 
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18158755283');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
