import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Northland Global School - Excellence in Education",
  description: "Northland Global School is committed to providing world-class education and nurturing future leaders through innovative teaching methods and holistic development.",
  keywords: "school, education, CBSE, global school, Northland, admissions, facilities",
  authors: [{ name: "Northland Global School" }],
  openGraph: {
    title: "Northland Global School - Excellence in Education",
    description: "World-class education with innovative teaching methods and holistic development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-poppins antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
