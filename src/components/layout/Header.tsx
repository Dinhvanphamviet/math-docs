"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation"; 

const navItems = [
  { name: "Tài liệu mới", href: "/tai-lieu" },
  { name: "Đề thi thử", href: "/de-thi-thu" },
  { name: "Blog Toán học", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#f8f9ff] w-full top-0 sticky z-50 transition-colors duration-200 border-b border-[#c5c6cd]/20">
      <div className="flex items-center w-full h-[73px]">
        
        {/* KHỐI 1: LOGO */}
        <div className="hidden md:flex w-64 h-full shrink-0 items-center px-4 md:px-8 border-r border-[#c5c6cd]/20">
          <Link href="/" className="font-headline text-2xl font-bold text-[#091426]">
            MathPrep
          </Link>
        </div>

        <div className="md:hidden flex shrink-0 items-center px-4">
          <Link href="/" className="font-headline text-2xl font-bold text-[#091426]">
            MathPrep
          </Link>
        </div>
        
        {/* KHỐI 2: MENU */}
        <div className="hidden md:flex flex-1 gap-6 lg:gap-8 px-6 lg:px-8 h-full items-center">
          {navItems.map((item) => {
            const isActive = pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium text-sm transition-colors duration-200 whitespace-nowrap h-full flex items-center border-b-2 mt-[2px] ${
                  isActive
                    ? "text-[#0051d5] border-[#0051d5] opacity-100" // Trạng thái đang chọn: Xanh, hiện viền dưới
                    : "text-[#091426] border-transparent opacity-80 hover:opacity-100 hover:text-[#0051d5]" // Trạng thái chưa chọn: Đen trong suốt, ẩn viền
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* KHỐI 3: TÌM KIẾM & LIÊN HỆ */}
        <div className="flex items-center gap-4 lg:gap-6 px-4 md:px-8 ml-auto shrink-0">
          <div className="hidden lg:flex items-center bg-[#eff4ff] px-4 py-2 rounded-full border border-[#c5c6cd]/15 focus-within:ring-2 focus-within:ring-[#0051d5]/20 transition-all">
            <Search className="w-4 h-4 text-[#45474c] mr-2" />
            <input 
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm w-32 xl:w-48 text-[#091426] placeholder-[#45474c]/70" 
              placeholder="Tìm kiếm tài liệu..." 
              type="text"
            />
          </div>
          <button className="bg-[#091426] text-[#ffffff] px-6 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity scale-95 active:scale-90 transition-transform whitespace-nowrap">
            Liên hệ
          </button>
        </div>

      </div>
    </nav>
  );
}