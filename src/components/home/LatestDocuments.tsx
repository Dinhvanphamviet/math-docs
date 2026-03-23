import { Filter } from "lucide-react";
import DocumentCard, { DocumentInfo } from "./DocumentCard";

// Thêm dữ liệu cho đủ 8 bài
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
  {
    id: "5",
    title: "Tuyển tập 50 bài Hình học Không gian hay và khó",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
    fileType: "PDF",
    grade: "LỚP 11",
    date: "01/10/2024",
    views: "3.2k",
    slug: "tuyen-tap-50-bai-hinh-khong-gian",
  },
  {
    id: "6",
    title: "Phương pháp giải nhanh trắc nghiệm Số phức",
    thumbnail: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?q=80&w=600&auto=format&fit=crop",
    fileType: "DOCX",
    grade: "LỚP 12",
    date: "28/09/2024",
    views: "1.8k",
    slug: "phuong-phap-giai-nhanh-so-phuc",
  },
  {
    id: "7",
    title: "Tóm tắt lý thuyết Đại số 10 theo chương trình mới",
    thumbnail: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop",
    fileType: "PDF",
    grade: "LỚP 10",
    date: "25/09/2024",
    views: "950",
    slug: "tom-tat-ly-thuyet-dai-so-10",
  },
  {
    id: "8",
    title: "Đề thi giữa kì 1 Toán 12 - THPT Chuyên KHTN",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
    fileType: "PDF",
    grade: "LỚP 12",
    date: "20/09/2024",
    views: "5.1k",
    slug: "de-thi-giua-ki-1-toan-12-khtn",
  },
  {
    id: "9", // Bài thứ 9 này sẽ bị ẩn đi nhờ hàm slice(0, 8)
    title: "Bài tập tự luận Tích phân có đáp án chi tiết",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
    fileType: "DOCX",
    grade: "LỚP 12",
    date: "15/09/2024",
    views: "2.3k",
    slug: "bai-tap-tu-luan-tich-phan",
  }
];

export default function LatestDocuments() {
  return (
    <section className="w-full mt-20 mb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-headline text-3xl font-bold text-[#091426] dark:text-white">Tài liệu mới cập nhật</h2>
          <p className="text-[#45474c] dark:text-slate-400 text-sm mt-1">Được kiểm duyệt và đăng tải bởi hội đồng học thuật</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {latestDocuments.slice(0, 8).map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-[#eff4ff] dark:bg-slate-800 text-[#0051d5] dark:text-blue-400 px-10 py-3 rounded-full font-bold text-sm hover:bg-[#dce9ff] dark:hover:bg-slate-700 transition-colors">
          Xem tất cả tài liệu
        </button>
      </div>
    </section>
  );
}