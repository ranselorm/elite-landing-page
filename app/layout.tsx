import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fleet Connect",
  description:
    "Whether you need a car for business, leisure, or special occasions, we make renting easy with our seamless booking process, flexible plans, and diverse fleet tailored to meet your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Navbar />
          {children}
          <Footer2 />
        </div>
      </body>
    </html>
  );
}
