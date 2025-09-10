import { FilterIcon } from './Icons';

interface ProductFilterProps {
  categories: string[];
  selectedCategory: string;
  sortBy: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

const ProductFilter = ({ 
  categories, 
  selectedCategory, 
  sortBy, 
  onCategoryChange, 
  onSortChange 
}: ProductFilterProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center mb-4">
        <FilterIcon className="text-gray-600 mr-2" size={20} />
        <h3 className="text-lg font-semibold text-gray-900">Filtres</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Filtre par catégorie */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Catégorie
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Tri */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trier par
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="name">Nom</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="category">Catégorie</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;