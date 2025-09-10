import { shopInfo } from '../data';
import { PhoneIcon, LocationIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informations boutique */}
          <div>
            <h3 className="text-xl font-bold mb-4">{shopInfo.name}</h3>
            <p className="text-gray-300 mb-4">
              {shopInfo.description}
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <PhoneIcon className="text-blue-400" size={16} />
              <a href={`tel:${shopInfo.phone}`} className="text-gray-300 hover:text-white">
                {shopInfo.phone}
              </a>
            </div>
            <div className="flex items-start space-x-2">
              <LocationIcon className="text-blue-400 mt-1" size={16} />
              <span className="text-gray-300 text-sm">
                {shopInfo.address}
              </span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#produits" className="text-gray-300 hover:text-white transition-colors">
                  Produits
                </a>
              </li>
              <li>
                <a href="#informations" className="text-gray-300 hover:text-white transition-colors">
                  Informations
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
            <p className="text-gray-300">
              {shopInfo.hours}
            </p>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">
                Email: 
                <a href={`mailto:${shopInfo.email}`} className="text-blue-400 hover:text-blue-300 ml-1">
                  {shopInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 {shopInfo.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;