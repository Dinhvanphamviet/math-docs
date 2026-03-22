import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import SidebarClient from "@/components/layout/SidebarClient";
import { SidebarProvider } from "@/components/ui/sidebar";

// 1. Thêm dòng import TooltipProvider ở đây
import { TooltipProvider } from "@/components/ui/tooltip";

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
      <body className={`${inter.variable} ${notoSerif.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        
        <TooltipProvider>
          <Header />
          
          <SidebarProvider>
            <div className="flex w-full max-w-screen-2xl mx-auto">
              <SidebarClient />
              
              <main className="flex-1 w-full min-w-0">
                {children}
              </main>
            </div>
          </SidebarProvider>
        </TooltipProvider>

      </body>
    </html>
  );
}