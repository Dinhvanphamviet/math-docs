import Link from "next/link";
import { MoveRight, LucideIcon } from "lucide-react";

interface GradeCardProps {
  level: string;
  title: string;
  description: string;
  docCount: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
  highlight?: boolean;
}

export default function GradeCard({
  title,
  description,
  docCount,
  icon: Icon,
  href,
  badge,
  highlight,
}: GradeCardProps) {
  return (
    <Link
      href={href}
      className={`group relative p-8 rounded-xl overflow-hidden transition-all duration-300 flex flex-col min-h-[220px] ${
        highlight
          ? "bg-surface-container-low border-2 border-secondary/10 hover:border-secondary/20 shadow-sm"
          : "bg-surface-container-low hover:bg-surface-container-high"
      }`}
    >
      {/* Icon trang trí siêu lớn nằm ẩn dưới nền */}
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
        <Icon size={120} strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Badge (Ví dụ: Luyện thi THPT cho lớp 12) */}
        {badge && (
          <div className="w-fit bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-0.5 rounded mb-3">
            {badge}
          </div>
        )}

        <h3 className="font-headline text-2xl font-bold mb-2 text-primary">
          {title}
        </h3>

        <p className="text-on-surface-variant text-sm mb-auto max-w-[220px] leading-relaxed opacity-80">
          {description}
        </p>

        {/* Phần chân Card: Số lượng và Mũi tên */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-secondary font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
            {docCount} Tài liệu
            <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}