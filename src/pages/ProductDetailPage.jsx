import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProductDetail from "../components/ProductDetail";
import { products } from "../data/products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h2 className="text-lg font-semibold text-gray-700">
          محصول مورد نظر یافت نشد
        </h2>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#6C63FF] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5a52e0]"
        >
          بازگشت به محصولات
          <ArrowLeft size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link
        to="/products"
        className="mb-8 inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-[#6C63FF]"
      >
        <ArrowLeft size={14} />
        بازگشت به محصولات
      </Link>
      <ProductDetail product={product} />
    </div>
  );
}
