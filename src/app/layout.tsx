import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
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
          
          <div className="flex flex-col min-h-screen min-w-0">
            <main className="flex-1 w-full px-4 md:px-6 py-6 md:py-8">
              {children}
            </main>
            
            <Footer />
          </div>
        </TooltipProvider>

      </body>
    </html>
  );
}