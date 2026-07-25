import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
        <ShoppingBag size={48} className="text-gray-300" />
        <h2 className="mt-4 text-lg font-semibold text-gray-700">
          سبد خرید شما خالی است
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          محصولی به سبد خرید خود اضافه نکرده‌اید.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#6C63FF] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5a52e0]"
        >
          مشاهده محصولات
          <ArrowLeft size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-2xl font-bold text-gray-900">سبد خرید</h1>

      <div className="rounded-2xl border border-gray-200 bg-white px-6">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-end gap-4 rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex w-full items-center justify-between text-base font-semibold text-gray-800">
          <span>مبلغ قابل پرداخت</span>
          <span className="text-xl font-bold text-[#6C63FF]">
            {totalPrice.toLocaleString("fa-IR")} تومان
          </span>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <button
            onClick={clearCart}
            className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50"
          >
            خالی کردن سبد خرید
          </button>
          <button className="flex-1 rounded-xl bg-[#6C63FF] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5a52e0]">
            ادامه فرآیند خرید
          </button>
        </div>
      </div>
    </div>
  );
}
