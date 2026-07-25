import { Link } from "react-router-dom";
import { ShoppingCart, Zap } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6C63FF] text-white">
            <Zap size={18} fill="white" />
          </span>
          <span className="text-lg font-bold text-gray-800">
            گجت<span className="text-[#6C63FF]">شاپ</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          <Link to="/" className="transition-colors hover:text-[#6C63FF]">
            خانه
          </Link>
          <Link to="/products" className="transition-colors hover:text-[#6C63FF]">
            محصولات
          </Link>
          <a href="#about" className="transition-colors hover:text-[#6C63FF]">
            درباره ما
          </a>
        </nav>

        <Link
          to="/cart"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-[#6C63FF] hover:text-white"
        >
          <ShoppingCart size={19} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#6C63FF] text-[11px] font-bold text-white">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
