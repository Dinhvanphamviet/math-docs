import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import SidebarClient from "@/components/layout/SidebarClient";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin", "vietnamese"], 
  variable: "--font-inter" 
});

const notoSerif = Noto_Serif({ 
  subsets: ["latin", "vietnamese"], 
  variable: "--font-noto-serif" 
});

export const metadata: Metadata = {
  title: "MathPrep - Thư viện Toán học",
  description: "Kho tài liệu Toán học Phổ thông",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${notoSerif.variable} antialiased min-h-screen bg-background text-foreground`}>
        
        <TooltipProvider>
          <Header />
          
          <SidebarProvider>
            <div className="flex w-full min-h-screen">
              <SidebarClient />
              
              <div className="flex-1 flex flex-col min-w-0 min-h-screen">
                <main className="flex-1 w-full p-6 md:p-8 xl:p-10">
                  {children}
                </main>
                
                <Footer />
              </div>
            </div>
          </SidebarProvider>
        </TooltipProvider>

      </body>
    </html>
  );
}