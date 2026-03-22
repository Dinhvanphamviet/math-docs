import Link from "next/link";
import { Share2, Mail, Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/70 font-body text-sm w-full mt-auto border-t border-white/10">
      <div className="w-full px-6 md:px-8 xl:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* CỘT 1: THÔNG TIN CHUNG */}
          <div className="space-y-4">
            <h2 className="font-headline text-2xl text-white font-bold tracking-tight">
              MathPrep
            </h2>
            <p className="max-w-xs leading-relaxed text-white/60">
              Hệ thống chia sẻ học liệu toán học dành cho cộng đồng học sinh và
              giáo viên phổ thông Việt Nam.
            </p>
          </div>

          {/* CỘT 2: LIÊN KẾT NHANH */}
          <div>
            <h4 className="text-white text-[13px] font-bold mb-6 uppercase tracking-widest">
              Liên kết nhanh
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors underline decoration-white/20 underline-offset-4"
                >
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Hướng dẫn tìm kiếm
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Hỗ trợ học thuật
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 3: KẾT NỐI */}
          <div>
            <h4 className="text-white text-[13px] font-bold mb-6 uppercase tracking-widest">
              Kết nối
            </h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <Share2 size={18} className="text-white/80" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <Mail size={18} className="text-white/80" />
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-white/40">
              <Copyright size={14} />
              <p>2024 MathPrep - Thư viện tài liệu toán học chuyên sâu</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
