import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products, testimonials } from "../data/products";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.badge === "جدید").slice(0, 4);
  const discountedProducts = products.filter((p) => p.badge === "تخفیف");

  return (
    <div>
      <Hero />

      {/* محصولات ویژه */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-xl font-bold text-gray-900">محصولات ویژه</h2>
          <Link
            to="/products"
            className="flex items-center gap-1 text-sm font-medium text-[#6C63FF] hover:underline"
          >
            مشاهده همه
            <ArrowLeft size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* تخفیف‌ها */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              پیشنهادهای شگفت‌انگیز
            </h2>
            <Link
              to="/products"
              className="flex items-center gap-1 text-sm font-medium text-[#6C63FF] hover:underline"
            >
              مشاهده همه
              <ArrowLeft size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {discountedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* نظرات مشتریان */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-xl font-bold text-gray-900">
          نظرات مشتریان ما
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-gray-600">
                {review.text}
              </p>
              <p className="mt-4 text-sm font-semibold text-gray-800">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
