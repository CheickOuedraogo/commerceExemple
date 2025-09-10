import { ShoppingCartIcon } from './Icons';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-32" id="accueil">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bienvenue chez{' '}
              <span className="text-yellow-300">BoutiqueStyle</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Découvrez notre sélection exceptionnelle de produits de qualité, 
              soigneusement choisis pour vous offrir le meilleur rapport qualité-prix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#produits" 
                className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <ShoppingCartIcon className="mr-2" size={20} />
                Voir nos produits
              </a>
              <a 
                href="#informations" 
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300"
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-300">12+</div>
                  <div className="text-sm text-blue-100">Produits</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-300">6</div>
                  <div className="text-sm text-blue-100">Catégories</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-300">24/7</div>
                  <div className="text-sm text-blue-100">Support</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-300">✓</div>
                  <div className="text-sm text-blue-100">Qualité</div>
                </div>
              </div>
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Vague décorative */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-gray-50">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;