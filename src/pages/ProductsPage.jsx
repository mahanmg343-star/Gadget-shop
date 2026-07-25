import React, { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import { products } from "../data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">همه محصولات</h1>
      <p className="mb-8 text-sm text-gray-500">
        {filteredProducts.length} محصول یافت شد
      </p>

      <div className="mb-10">
        <CategoryFilter
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-sm text-gray-500">
          محصولی در این دسته‌بندی یافت نشد.
        </p>
      )}
    </div>
  );
}
