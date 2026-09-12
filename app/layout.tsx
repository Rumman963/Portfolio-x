import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DotGridSpotlight } from "@/components/ui/dot-grid-spotlight";

export const metadata: Metadata = {
  title: "Rumman Portfolio",
  description: "Personal portfolio showcasing my projects and skills",
};

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <DotGridSpotlight>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </DotGridSpotlight>
        </body>
    </html>
  );
}
