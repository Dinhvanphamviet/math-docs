import Link from "next/link";
import { Calendar, Eye } from "lucide-react"; // Import icon từ lucide-react

export interface DocumentInfo {
  id: string;
  title: string;
  thumbnail: string;
  fileType: string;
  grade: string;
  date: string;
  views: string | number;
  slug: string;
}

export default function DocumentCard({ doc }: { doc: DocumentInfo }) {
  return (
    <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <Link href={`/tai-lieu/${doc.slug}`} className="flex flex-col h-full">
        {/* Phần Hình Ảnh & Badge */}
        <div className="h-40 relative overflow-hidden bg-slate-100 shrink-0">
          <img
            alt={doc.title}
            src={doc.thumbnail}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="bg-secondary text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">
              {doc.fileType}
            </span>
            <span className="glass-effect text-primary text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">
              {doc.grade}
            </span>
          </div>
        </div>

        {/* Phần Nội Dung */}
        <div className="p-5 flex flex-col flex-1">
          <h4 className="font-bold text-primary mb-3 line-clamp-2 leading-snug group-hover:text-secondary transition-colors text-sm md:text-base">
            {doc.title}
          </h4>
          
          {/* --- DÒNG CUỐI ĐÃ ĐƯỢC CẬP NHẬT --- */}
          <div className="flex items-center gap-4 text-xs text-on-surface-variant mt-auto font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 stroke-[1.5]" /> 
              {doc.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 stroke-[1.5]" /> 
              {doc.views}
            </span>
          </div>
          {/* -------------------------------- */}
          
        </div>
      </Link>
    </div>
  );
}