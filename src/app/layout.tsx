import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Configure Inter for the primary design font
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  // Inter is a variable font, so weights are handled automatically,
  // but we ensure it covers the latin subset.
});

// Keeping the default monospace font for code snippets if needed
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ph Health care managemnet system",
  description: "This is a telemedicine site for remote people to access quality doctor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}