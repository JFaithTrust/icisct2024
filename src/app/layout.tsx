import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ICISCT2024",
  description: "The 2024 International Conference on Information Systems and Computer Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} min-h-screen w-full flex flex-col p-6 bg-gray-100`}>
    <Navbar />
    <main className="flex-grow py-4">
      {children}
    </main>
    </body>
    </html>
  );
}
