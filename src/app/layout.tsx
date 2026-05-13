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
  title: "PredicFi | Pollas Futboleras del Mundial 2026",
  description: "Sistema 100% automatizado en la red Base para organizar tus quinielas deportivas. Cero cálculos manuales, posiciones en tiempo real.",
  metadataBase: new URL("https://predicfi.site"),
  openGraph: {
    title: "PredicFi | Pollas Futboleras del Mundial 2026",
    description: "Únete a las pools públicas o arma tu grupo privado. Posiciones en tiempo real y cero trabajo manual.",
    url: "https://predicfi.site",
    siteName: "PredicFi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PredicFi Mundial 2026 Preview",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PredicFi | Pollas Futboleras del Mundial 2026",
    description: "Únete a las pools públicas o arma tu grupo privado. Posiciones en tiempo real y cero trabajo manual.",
    images: ["/og-image.jpg"],
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
