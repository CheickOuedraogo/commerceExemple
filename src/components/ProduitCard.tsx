import type { IProduct } from '../data';
import { formatPrice, calculateDiscountPercentage, truncateText } from '../utils/formatters';
import { MESSAGES } from '../config/constants';

interface ProductCardProps {
  data: IProduct;
  onBuy: (product: IProduct) => void;
}

const ProductCard = ({ data, onBuy }: ProductCardProps) => {
  const shortDescription = truncateText(data.desc, 80);
  const hasDiscount = data.newPrice !== undefined;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-48 sm:h-56 object-cover"
          src={data.image}
          alt={data.title}
          loading="lazy"
        />
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            -{calculateDiscountPercentage(data.newPrice!, data.price)}%
          </div>
        )}
        {!data.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">{MESSAGES.outOfStock}</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
            {data.category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-2">
          {data.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {shortDescription}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            {hasDiscount ? (
              <>
                <span className="text-lg font-bold text-green-600">
                  {formatPrice(data.price)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(data.newPrice!)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(data.price)}
              </span>
            )}
          </div>
        </div>
        
        <button 
          onClick={() => onBuy(data)}
          disabled={!data.inStock}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            data.inStock 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {data.inStock ? MESSAGES.addToCart : 'Indisponible'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
