"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation"; 

// Tách làm 2 mảng để tiện hiển thị vạch kẻ ngăn cách ở giữa
const classItems = [
  { name: "Toán 10", href: "/toan-10" },
  { name: "Toán 11", href: "/toan-11" },
  { name: "Toán 12", href: "/toan-12" },
];

const extraItems = [
  { name: "Đề thi thử THPT", href: "/de-thi-thu" },
  { name: "Blog Toán", href: "/blog" },
];

// Danh sách các chủ đề con cho từng khối lớp (Sub-header)
const subTopics: Record<string, { name: string; href: string }[]> = {
  "/toan-10": [
    { name: "Tất cả chủ đề", href: "/toan-10" },
    { name: "Mệnh đề & Tập hợp", href: "/toan-10/menh-de-tap-hop" },
    { name: "Hàm số bậc hai", href: "/toan-10/ham-so-bac-hai" },
    { name: "Hệ thức lượng", href: "/toan-10/he-thuc-luong" },
    { name: "Vectơ", href: "/toan-10/vecto" },
    { name: "Thống kê", href: "/toan-10/thong-ke" },
    { name: "Lượng giác", href: "/toan-10/luong-giac" },
  ],
  "/toan-11": [
    { name: "Tất cả chủ đề", href: "/toan-11" },
    { name: "Hàm số lượng giác", href: "/toan-11/ham-so-luong-giac" },
    { name: "Dãy số & Cấp số", href: "/toan-11/day-so" },
    { name: "Giới hạn", href: "/toan-11/gioi-han" },
    { name: "Quan hệ song song", href: "/toan-11/quan-he-song-song" },
  ],
  "/toan-12": [
    { name: "Tất cả chủ đề", href: "/toan-12" },
    { name: "Ứng dụng đạo hàm", href: "/toan-12/dao-ham" },
    { name: "Mũ & Logarit", href: "/toan-12/logarit" },
    { name: "Nguyên hàm & Tích phân", href: "/toan-12/tich-phan" },
    { name: "Số phức", href: "/toan-12/so-phuc" },
  ],
};

export default function Header() {
  const pathname = usePathname();

  // Kiểm tra xem URL hiện tại thuộc khối lớp nào
  const activeCategoryPath = Object.keys(subTopics).find(path => pathname?.startsWith(path));
  // Lấy danh sách chủ đề con tương ứng
  const activeTopics = activeCategoryPath ? subTopics[activeCategoryPath] : null;

  return (
    <header className="bg-[#f8f9ff] w-full top-0 sticky z-50 transition-colors duration-200 border-b border-[#c5c6cd]/20 flex flex-col">
      {/* ---------------- KHỐI HEADER CHÍNH ---------------- */}
      <div className="flex items-center w-full h-[73px]">
        
        {/* LOGO */}
        <div className="hidden md:flex w-64 h-full shrink-0 items-center px-4 md:px-8">
          <Link href="/" className="font-headline text-2xl font-bold text-[#091426]">
            MathPrep
          </Link>
        </div>

        <div className="md:hidden flex shrink-0 items-center px-4">
          <Link href="/" className="font-headline text-2xl font-bold text-[#091426]">
            MathPrep
          </Link>
        </div>
        
        {/* MENU */}
        <div className="hidden md:flex flex-1 items-center px-6 lg:px-8 h-full gap-6">
          
          {/* Nhóm Lớp Học */}
          {classItems.map((item) => {
            const isActive = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium text-sm transition-colors duration-200 whitespace-nowrap h-full flex items-center border-b-2 mt-[2px] ${
                  isActive
                    ? "text-[#0051d5] border-[#0051d5] opacity-100" 
                    : "text-[#45474c] border-transparent hover:text-[#091426]" 
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          {/* Nhóm Mở Rộng */}
          {extraItems.map((item) => {
            const isActive = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium text-sm transition-colors duration-200 whitespace-nowrap h-full flex items-center border-b-2 mt-[2px] ${
                  isActive
                    ? "text-[#0051d5] border-[#0051d5] opacity-100" 
                    : "text-[#45474c] border-transparent hover:text-[#091426]" 
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          
        </div>

        {/* TÌM KIẾM & LIÊN HỆ */}
        <div className="flex items-center gap-4 lg:gap-6 px-4 md:px-8 ml-auto shrink-0">
          <div className="hidden lg:flex items-center bg-[#eff4ff] px-4 py-2 rounded-full border border-[#c5c6cd]/15 focus-within:ring-2 focus-within:ring-[#0051d5]/20 transition-all">
            <Search className="w-4 h-4 text-[#45474c] mr-2" />
            <input 
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm w-32 xl:w-48 text-[#091426] placeholder-[#45474c]/70" 
              placeholder="Tìm kiếm tài liệu..." 
              type="text"
            />
          </div>
          <button className="bg-[#091426] text-[#ffffff] px-6 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity active:scale-95 transition-transform whitespace-nowrap">
            Liên hệ
          </button>
        </div>
      </div>

      {/* ---------------- KHỐI SUB-HEADER (CHỈ HIỆN KHI VÀO CATEGORY) ---------------- */}
      {activeTopics && (
        <div className="bg-[#eff4ff]/50 border-t border-[#c5c6cd]/15">
          <div className="px-4 md:px-8 py-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <div className="flex items-center gap-2 min-w-max">
              {activeTopics.map((topic) => {
                const isTopicActive = pathname === topic.href;
                
                return (
                  <Link
                    key={topic.href}
                    href={topic.href}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      isTopicActive 
                        ? "bg-[#0051d5] text-white" 
                        : "text-[#45474c] hover:bg-[#d3e4fe]"
                    }`}
                  >
                    {topic.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}