// Configuration de l'application
export const APP_CONFIG = {
  name: 'BoutiqueStyle',
  version: '1.0.0',
  description: 'Votre boutique en ligne de confiance',
  currency: 'FCFA',
  locale: 'fr-FR'
};

// URLs et endpoints
export const URLS = {
  images: {
    placeholder: 'https://picsum.photos',
    avatars: 'https://images.unsplash.com'
  }
};

// Constantes de l'interface utilisateur
export const UI_CONSTANTS = {
  breakpoints: {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
    wide: 1280
  },
  grid: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    wide: 4
  },
  animation: {
    duration: 300,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

// Messages et textes
export const MESSAGES = {
  loading: 'Chargement...',
  error: 'Une erreur s\'est produite',
  noProducts: 'Aucun produit trouvé pour cette catégorie.',
  outOfStock: 'Rupture de stock',
  inStock: 'En stock',
  addToCart: 'Acheter',
  backToProducts: '← Retour aux produits',
  contactForPurchase: 'Pour finaliser votre achat',
  mentionProductCode: 'Mentionnez le code produit'
};

// Configuration des filtres et tri
export const FILTER_OPTIONS = {
  sort: [
    { value: 'name', label: 'Nom' },
    { value: 'price-asc', label: 'Prix croissant' },
    { value: 'price-desc', label: 'Prix décroissant' },
    { value: 'category', label: 'Catégorie' }
  ]
};

// Validation
export const VALIDATION = {
  product: {
    titleMaxLength: 100,
    descriptionMaxLength: 500,
    minPrice: 0,
    maxPrice: 1000000
  }
};