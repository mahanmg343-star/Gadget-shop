import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[440px] items-center overflow-hidden bg-gray-900"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(15,15,20,0.85), rgba(15,15,20,0.55)), url('https://picsum.photos/seed/herobg/1600/900')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 text-right">
        <p className="mb-3 inline-block rounded-full bg-[#6C63FF]/20 px-4 py-1 text-sm font-medium text-[#a8a2ff]">
          جدیدترین گجت‌های دیجیتال
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-relaxed text-white md:text-5xl">
          دنیای گجت‌ها را با
          <span className="text-[#6C63FF]"> گجت‌شاپ </span>
          تجربه کنید
        </h1>
        <p className="mt-4 max-w-md text-sm text-gray-300 md:text-base">
          بهترین هدفون‌های بی‌سیم، ساعت‌های هوشمند، پاوربانک‌ها و لوازم جانبی
          موبایل با ضمانت اصالت و ارسال سریع.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6C63FF] px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-[#5a52e0]"
        >
          مشاهده محصولات
          <ArrowLeft size={16} />
        </Link>
      </div>
    </section>
  );
}
