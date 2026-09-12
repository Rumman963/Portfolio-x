import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Rumman Portfolio",
  description: "Personal portfolio showcasing my projects and skills",
};

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col ">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
