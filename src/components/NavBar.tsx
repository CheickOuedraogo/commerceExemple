import { useState } from 'react';
import { MenuIcon, CloseIcon, ShoppingCartIcon } from './Icons';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">BoutiqueStyle</span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Accueil
            </a>
            <a href="#produits" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Produits
            </a>
            <a href="#informations" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Informations
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Panier et Menu Mobile */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingCartIcon size={24} />
            </button>
            
            {/* Menu Mobile Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#accueil" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">
                Accueil
              </a>
              <a href="#produits" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">
                Produits
              </a>
              <a href="#informations" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">
                Informations
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;