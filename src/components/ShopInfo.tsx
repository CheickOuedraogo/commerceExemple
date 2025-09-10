import { shopInfo } from '../data';
import { PhoneIcon, LocationIcon, InfoIcon } from './Icons';

const ShopInfo = () => {
  return (
    <div className="bg-white py-12" id="informations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            À propos de {shopInfo.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {shopInfo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <PhoneIcon className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Contact</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Téléphone :</strong> 
                <a href={`tel:${shopInfo.phone}`} className="text-blue-600 hover:text-blue-800 ml-1">
                  {shopInfo.phone}
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Email :</strong> 
                <a href={`mailto:${shopInfo.email}`} className="text-blue-600 hover:text-blue-800 ml-1">
                  {shopInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* Localisation */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <LocationIcon className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Localisation</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Adresse :</strong><br />
                {shopInfo.address}
              </p>
              <p className="text-gray-600">
                <strong>Horaires :</strong><br />
                {shopInfo.hours}
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <InfoIcon className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Nos Services</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Livraison gratuite dès 25 000 FCFA</li>
              <li>• Retrait en magasin</li>
              <li>• Garantie satisfait ou remboursé</li>
              <li>• Service client réactif</li>
              <li>• Paiement sécurisé</li>
            </ul>
          </div>
        </div>

        {/* Carte */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nous trouver
          </h3>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <LocationIcon className="text-gray-500 mx-auto mb-2" size={48} />
              <p className="text-gray-600">
                Carte interactive disponible<br />
                Coordonnées : {shopInfo.location.lat}, {shopInfo.location.lng}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;