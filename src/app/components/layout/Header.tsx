import Link from "next/link";
import { Search } from "lucide-react"; // Dùng icon chuẩn của hệ sinh thái shadcn
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <nav className="bg-background/95 backdrop-blur-sm text-sm font-medium tracking-wide text-primary sticky top-0 z-50 transition-colors duration-200 border-b border-border/40">
      <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
        
        {/* Khối Logo và Menu */}
        <div className="flex items-center gap-12">
          <Link href="/" className="font-headline text-2xl font-bold text-primary">
            MathPrep
          </Link>
          
          <div className="hidden md:flex gap-8">
            <Link 
              href="/tai-lieu" 
              className="text-secondary border-b-2 border-secondary pb-1 hover:text-secondary transition-colors duration-200"
            >
              Tài liệu mới
            </Link>
            <Link 
              href="/de-thi-thu" 
              className="text-primary/80 hover:text-secondary transition-colors duration-200"
            >
              Đề thi thử
            </Link>
            <Link 
              href="/blog" 
              className="text-primary/80 hover:text-secondary transition-colors duration-200"
            >
              Blog Toán học
            </Link>
          </div>
        </div>

        {/* Khối Tìm kiếm và Nút Liên hệ */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-surface-low px-4 py-2 rounded-full border border-border/50 focus-within:ring-2 focus-within:ring-secondary/20 transition-all">
            <Search className="w-4 h-4 text-primary/50 mr-2" />
            <input 
              className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm w-48 text-primary placeholder:text-primary/50" 
              placeholder="Tìm kiếm tài liệu..." 
              type="text"
            />
          </div>
          <Button 
            className="rounded-lg px-6 py-2 font-medium bg-primary text-white hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
          >
            Liên hệ
          </Button>
        </div>

      </div>
    </nav>
  );
}