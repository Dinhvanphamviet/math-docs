import Hero from "@/components/home/Hero";
// Mình thấy trong project bạn đã có sẵn GradeBlocks, nên import vào luôn cho gọn nhé
import GradeBlocks from "@/components/home/GradeBlocks"; 
import DocumentCard, { DocumentInfo } from "@/components/home/DocumentCard";
import { Filter } from "lucide-react";

// Dữ liệu mẫu hiển thị ra trang chủ (sau này bạn có thể fetch từ API)
const latestDocuments: DocumentInfo[] = [
  {
    id: "1",
    title: "Đề khảo sát chất lượng Giải tích 12 - Chuyên Lê Hồng Phong",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
    fileType: "PDF",
    grade: "LỚP 12",
    date: "12/10/2024",
    views: "1.2k",
    slug: "de-khao-sat-giai-tich-12-le-hong-phong",
  },
  {
    id: "2",
    title: "Tổng hợp công thức Lượng giác nâng cao và bài tập vận dụng",
    thumbnail: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?q=80&w=600&auto=format&fit=crop",
    fileType: "PDF",
    grade: "LỚP 11",
    date: "10/10/2024",
    views: "850",
    slug: "cong-thuc-luong-giac-nang-cao",
  },
  {
    id: "3",
    title: "Chuyên đề Mệnh đề và Tập hợp - Phân loại bài tập chi tiết",
    thumbnail: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop",
    fileType: "DOCX",
    grade: "LỚP 10",
    date: "08/10/2024",
    views: "2.1k",
    slug: "chuyen-de-menh-de-tap-hop",
  },
  {
    id: "4",
    title: "Đề thi thử THPT Quốc gia 2025 - Liên trường Nghệ An (Lần 1)",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
    fileType: "PDF",
    grade: "ÔN THI",
    date: "05/10/2024",
    views: "4.5k",
    slug: "de-thi-thu-thpt-nghe-an-2025",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Khu vực Banner */}
      <Hero />
      
      {/* 2. Khu vực Phân loại khối lớp */}
      <div className="mt-8">
        <GradeBlocks />
      </div>

      {/* 3. Khu vực Tài liệu mới cập nhật */}
      <section className="max-w-screen-2xl mx-auto mt-20 px-4 md:px-0">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#091426]">Tài liệu mới cập nhật</h2>
            <p className="text-[#45474c] text-sm mt-1">Được kiểm duyệt và đăng tải bởi hội đồng học thuật</p>
          </div>
          <button className="bg-[#ffffff] border border-[#c5c6cd]/30 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-[#eff4ff] transition-colors text-[#091426]">
            <Filter className="w-4 h-4" />
            <span className="hidden md:inline">Lọc theo chủ đề</span>
          </button>
        </div>

        {/* Gọi component DocumentCard và truyền data vào thông qua map() */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestDocuments.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#eff4ff] text-[#0051d5] px-10 py-3 rounded-full font-bold text-sm hover:bg-[#dce9ff] transition-colors">
            Xem tất cả tài liệu
          </button>
        </div>
      </section>

    </div>
  );
}