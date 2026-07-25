import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 border-b border-gray-100 py-5 last:border-none">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-500">
          {item.price.toLocaleString("fa-IR")} تومان
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-1.5">
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="text-gray-500 transition-colors hover:text-[#6C63FF]"
          aria-label="افزایش تعداد"
        >
          <Plus size={14} />
        </button>
        <span className="w-5 text-center text-sm font-semibold text-gray-800">
          {item.quantity}
        </span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="text-gray-500 transition-colors hover:text-[#6C63FF]"
          aria-label="کاهش تعداد"
        >
          <Minus size={14} />
        </button>
      </div>

      <div className="w-28 text-left text-sm font-bold text-gray-900">
        {(item.price * item.quantity).toLocaleString("fa-IR")} تومان
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-gray-400 transition-colors hover:text-rose-500"
        aria-label="حذف از سبد خرید"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
