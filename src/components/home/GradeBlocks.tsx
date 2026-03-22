import { BookOpen, Sigma, Calculator } from "lucide-react";
import GradeCard from "./GradeCard";

const gradeData = [
  {
    level: "10",
    title: "Khối 10",
    description: "Đại số & Giải tích cơ bản, Hình học trực quan.",
    docCount: "450+",
    icon: BookOpen,
    href: "/danh-muc/toan-10",
  },
  {
    level: "11",
    title: "Khối 11",
    description: "Lượng giác, Dãy số và Giới hạn nâng cao.",
    docCount: "620+",
    icon: Sigma,
    href: "/danh-muc/toan-11",
  },
  {
    level: "12",
    title: "Khối 12",
    description: "Ôn thi Quốc gia, Giải tích chuyên sâu.",
    docCount: "1.2k+",
    icon: Calculator,
    href: "/danh-muc/toan-12",
    badge: "LUYỆN THI THPT",
    highlight: true,
  },
];

export default function GradeBlocks() {
  return (
    <section className="mb-20">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-headline text-3xl font-bold text-primary">
          Phân loại theo khối lớp
        </h2>
        <a href="#" className="text-secondary text-sm font-medium hover:underline">
          Xem tất cả chương trình
        </a>
      </div>

      {/* Grid 3 cột trên PC, 1 cột trên Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gradeData.map((grade) => (
          <GradeCard key={grade.level} {...grade} />
        ))}
      </div>
    </section>
  );
}