export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 pt-12 pb-[1000px]">
      <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-6 inline-block">
        Thử nghiệm UI
      </span>
      <h1 className="font-headline text-4xl font-bold text-primary mb-4">
        Header đã hoạt động thành công! 🎉
      </h1>
      <p className="text-lg text-primary/70 max-w-2xl">
        Bây giờ bạn hãy thử cuộn trang xuống phía dưới để xem hiệu ứng "kính mờ" của thanh điều hướng nhé. Nó sẽ ghim cố định ở trên cùng (Sticky).
      </p>
    </div>
  );
}