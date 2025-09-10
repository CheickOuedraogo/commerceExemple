import { useState, useMemo } from 'react';
import ProductCard from "./components/ProduitCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ShopInfo from "./components/ShopInfo";
import PurchasePage from "./components/PurchasePage";
import ProductFilter from "./components/ProductFilter";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import useLocalStorage from "./hooks/useLocalStorage";
import { data } from "./data";
import type { IProduct } from "./data";

function App() {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [selectedCategory, setSelectedCategory] = useLocalStorage<string>('selectedCategory', '');
  const [sortBy, setSortBy] = useLocalStorage<string>('sortBy', 'name');

  // Obtenir toutes les catégories uniques
  const categories = useMemo(() => {
    return Array.from(new Set(data.map(product => product.category)));
  }, []);

  // Filtrer et trier les produits
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = data;

    // Filtrer par catégorie
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Trier
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'category':
          return a.category.localeCompare(b.category);
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return sorted;
  }, [selectedCategory, sortBy]);

  const handleBuyProduct = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return <PurchasePage product={selectedProduct} onBack={handleBackToProducts} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <Hero />
      <Stats />

      {/* Section Produits */}
      <section className="py-16" id="produits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nos Produits
          </h2>

          <ProductFilter
            categories={categories}
            selectedCategory={selectedCategory}
            sortBy={sortBy}
            onCategoryChange={setSelectedCategory}
            onSortChange={setSortBy}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                data={product} 
                onBuy={handleBuyProduct}
              />
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucun produit trouvé pour cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      <Testimonials />
      <ShopInfo />
      <Footer />
    </div>
  );
}

export default App;
