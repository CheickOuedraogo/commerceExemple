export interface IProduct {
  id: number;
  image: string;
  title: string;
  desc: string;
  price: number;
  newPrice?: number;
  category: string;
  inStock: boolean;
}

export interface IShopInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  location: {
    lat: number;
    lng: number;
  };
}

// Générateur de données aléatoires
const categories = ['Électronique', 'Vêtements', 'Maison', 'Sport', 'Livres', 'Beauté'];
const productNames = [
  'Smartphone Premium', 'Casque Audio', 'T-shirt Coton', 'Jeans Slim', 
  'Lampe LED', 'Coussin Déco', 'Ballon Football', 'Raquette Tennis',
  'Roman Aventure', 'Guide Voyage', 'Crème Visage', 'Parfum Floral'
];

const descriptions = [
  'Produit de haute qualité avec finition premium et garantie 2 ans',
  'Design moderne et élégant, parfait pour un usage quotidien',
  'Matériaux durables et respectueux de l\'environnement',
  'Technologie avancée pour une expérience utilisateur optimale',
  'Confort exceptionnel et style intemporel',
  'Innovation et performance réunies dans un seul produit'
];

function generateRandomProduct(id: number): IProduct {
  const hasDiscount = Math.random() > 0.7;
  const basePrice = Math.floor(Math.random() * 50000) + 5000;
  
  return {
    id,
    image: `https://picsum.photos/300/200?random=${id}`,
    title: productNames[Math.floor(Math.random() * productNames.length)],
    desc: descriptions[Math.floor(Math.random() * descriptions.length)],
    price: hasDiscount ? Math.floor(basePrice * 0.8) : basePrice,
    newPrice: hasDiscount ? basePrice : undefined,
    category: categories[Math.floor(Math.random() * categories.length)],
    inStock: Math.random() > 0.1
  };
}

export const data: IProduct[] = Array.from({ length: 12 }, (_, i) => generateRandomProduct(i + 1));

export const shopInfo: IShopInfo = {
  name: 'BoutiqueStyle',
  description: 'Votre boutique en ligne de confiance pour tous vos besoins quotidiens. Nous proposons une large gamme de produits de qualité à des prix compétitifs.',
  address: '123 Avenue de la République, 75011 Paris, France',
  phone: '+33 1 23 45 67 89',
  email: 'contact@boutiquestyle.fr',
  hours: 'Lun-Sam: 9h-19h, Dim: 10h-18h',
  location: {
    lat: 48.8566,
    lng: 2.3522
  }
};