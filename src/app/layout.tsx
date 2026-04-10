import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { seo } from "@/data/siteData";
import { Toaster } from "react-hot-toast";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased text-text-body bg-cream selection:bg-gold selection:text-white">
        {children}
        <Toaster position="bottom-right" toastOptions={{
          success: {
            style: { background: "#1C3A2F", color: "#fff" },
            iconTheme: { primary: "#B8955A", secondary: "#fff" },
          }
        }} />
      </body>
    </html>
  );
}

