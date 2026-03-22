import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="mt-8 mb-16 rounded-xl overflow-hidden relative w-full min-h-[400px] lg:min-h-[480px] xl:min-h-[560px] flex items-center bg-gradient-to-br from-[#091426] to-[#1e1b4b]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0),
          linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px, 48px 48px, 48px 48px",
        backgroundColor: "#091426",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(63,63,203,0.15),transparent)]"></div>

      <div className="relative z-10 px-8 md:px-12 xl:px-16 max-w-3xl xl:max-w-4xl">
        <span className="inline-block bg-[#ffddb8] text-[#2a1700] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-6">
          Thư viện mở MathPrep
        </span>

        <h1 className="font-headline text-5xl md:text-6xl xl:text-7xl text-white font-extrabold leading-tight mb-6">
          Kho tài liệu <br className="hidden sm:block" />
          Toán học Phổ thông
        </h1>

        <p className="text-white/70 text-lg xl:text-xl max-w-xl xl:max-w-2xl mb-8 leading-relaxed">
          Tiếp cận hàng ngàn đề thi chuyên sâu, bài giảng bám sát chương trình
          GDPT mới từ các chuyên gia hàng đầu.
        </p>

        <div className="flex gap-4">
          <Button
            size="lg"
            className="bg-[#0051d5] text-white hover:bg-[#0051d5]/90 hover:brightness-110 px-8 py-6 rounded-lg font-semibold flex items-center gap-2 transition-all text-base xl:text-lg"
          >
            Khám phá ngay
            <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none hidden lg:block overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full w-[400px] h-[400px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full w-[600px] h-[600px]"></div>

        <div className="absolute top-[20%] right-[10%] text-white text-5xl font-serif">
          ∫
        </div>
        <div className="absolute bottom-[20%] right-[30%] text-white text-5xl font-serif">
          Σ
        </div>
        <div className="absolute top-[40%] right-[25%] text-white text-3xl font-serif">
          π
        </div>
      </div>
    </section>
  );
}
