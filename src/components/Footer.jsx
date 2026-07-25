import { Zap, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="about" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6C63FF] text-white">
                <Zap size={18} fill="white" />
              </span>
              <span className="text-lg font-bold text-gray-800">
                گجت<span className="text-[#6C63FF]">شاپ</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-gray-500">
              گجت‌شاپ عرضه‌کننده انواع گجت‌های دیجیتال، هدفون‌های بی‌سیم، ساعت‌های
              هوشمند و پاوربانک با ضمانت اصالت کالا و ارسال سریع به سراسر کشور.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-800">
              لینک‌های مفید
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="/" className="transition-colors hover:text-[#6C63FF]">
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="transition-colors hover:text-[#6C63FF]"
                >
                  محصولات
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  className="transition-colors hover:text-[#6C63FF]"
                >
                  سبد خرید
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-[#6C63FF]">
                  درباره ما
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-800">
              دسته‌بندی‌ها
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>لوازم جانبی موبایل</li>
              <li>هدفون‌های بی‌سیم</li>
              <li>ساعت‌های هوشمند</li>
              <li>پاوربانک‌ها</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-800">
              اطلاعات تماس
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-[#6C63FF]" />
                ۰۲۱-۱۲۳۴۵۶۷۸
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#6C63FF]" />
                support@gadgetshop.ir
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-[#6C63FF]" />
                تهران، خیابان ولیعصر
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © ۱۴۰۴ گجت‌شاپ. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
