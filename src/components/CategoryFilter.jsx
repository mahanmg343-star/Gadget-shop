import { categories } from "../data/products";

export default function CategoryFilter({ activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onChange(category.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-[#6C63FF] bg-[#6C63FF] text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-[#6C63FF] hover:text-[#6C63FF]"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
