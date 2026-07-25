import  { useState } from "react";
import { Star, ShoppingCart, Minus, Plus, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductDetail({ product }) {
  const { addToCart, updateQuantity, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    const alreadyInCart = cartItems.find((item) => item.id === product.id);
    if (alreadyInCart) {
      updateQuantity(product.id, alreadyInCart.quantity + quantity);
    } else if (quantity > 1) {
      updateQuantity(product.id, quantity);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const badgeStyles =
    product.badge === "جدید"
      ? "bg-emerald-100 text-emerald-700"
      : product.badge === "تخفیف"
      ? "bg-rose-100 text-rose-700"
      : "";

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        {product.badge && (
          <span
            className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles}`}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>

        <div className="mt-2 flex items-center gap-1 text-amber-500">
          <Star size={16} fill="currentColor" />
          <span className="text-sm text-gray-600">{product.rating} از ۵</span>
        </div>

        <p className="mt-5 leading-8 text-gray-600">{product.description}</p>

        <div className="mt-6 text-3xl font-bold text-gray-900">
          {product.price.toLocaleString("fa-IR")} تومان
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex items-center gap-4 rounded-xl border border-gray-200 px-4 py-2">
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="text-gray-500 transition-colors hover:text-[#6C63FF]"
              aria-label="افزایش تعداد"
            >
              <Plus size={16} />
            </button>
            <span className="w-6 text-center font-semibold text-gray-800">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="text-gray-500 transition-colors hover:text-[#6C63FF]"
              aria-label="کاهش تعداد"
            >
              <Minus size={16} />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-all duration-300 active:scale-95 ${
              added ? "bg-emerald-500" : "bg-[#6C63FF] hover:bg-[#5a52e0]"
            }`}
          >
            {added ? (
              <>
                <Check size={18} /> به سبد خرید اضافه شد
              </>
            ) : (
              <>
                <ShoppingCart size={18} /> افزودن به سبد خرید
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
