import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const badgeStyles =
    product.badge === "جدید"
      ? "bg-emerald-100 text-emerald-700"
      : product.badge === "تخفیف"
      ? "bg-rose-100 text-rose-700"
      : "";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.badge && (
            <span
              className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles}`}
            >
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-sm font-semibold text-gray-800 transition-colors hover:text-[#6C63FF] line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <div className="mt-1 flex items-center gap-1 text-xs text-amber-500">
          <Star size={13} fill="currentColor" />
          <span className="text-gray-500">{product.rating}</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-base font-bold text-gray-900">
            {product.price.toLocaleString("fa-IR")} تومان
          </span>
        </div>

        <button
          onClick={handleAdd}
          className={`mt-3 flex items-center justify-center gap-2 rounded-xl py-2 text-sm font-semibold text-white transition-all duration-300 active:scale-95 ${
            added ? "bg-emerald-500" : "bg-[#6C63FF] hover:bg-[#5a52e0]"
          }`}
        >
          {added ? (
            <>
              <Check size={16} /> افزوده شد
            </>
          ) : (
            <>
              <ShoppingCart size={16} /> افزودن به سبد
            </>
          )}
        </button>
      </div>
    </div>
  );
}
