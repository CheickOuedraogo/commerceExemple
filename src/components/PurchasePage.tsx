import { shopInfo } from '../data';
import type { IProduct } from '../data';
import { PhoneIcon, LocationIcon } from './Icons';
import { formatPrice, calculateDiscountPercentage } from '../utils/formatters';
import { MESSAGES } from '../config/constants';

interface PurchasePageProps {
  product: IProduct;
  onBack: () => void;
}

const PurchasePage = ({ product, onBack }: PurchasePageProps) => {

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          {MESSAGES.backToProducts}
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/2 p-6">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              
              <p className="text-gray-600 mb-6">
                {product.desc}
              </p>
              
              <div className="mb-6">
                {product.newPrice ? (
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-green-600">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(product.newPrice)}
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">
                      -{calculateDiscountPercentage(product.newPrice, product.price)}%
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  {MESSAGES.contactForPurchase}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium">Appelez-nous :</p>
                      <a href={`tel:${shopInfo.phone}`} className="text-blue-600 hover:text-blue-800">
                        {shopInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <LocationIcon className="text-blue-600 mt-1" size={20} />
                    <div>
                      <p className="font-medium">Visitez notre boutique :</p>
                      <p className="text-gray-600 text-sm">{shopInfo.address}</p>
                      <p className="text-gray-600 text-sm">{shopInfo.hours}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm text-yellow-800">
                    💡 {MESSAGES.mentionProductCode} <strong>#{product.id}</strong> lors de votre appel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;