import { data } from '../data';

const Stats = () => {
  const totalProducts = data.length;
  const inStockProducts = data.filter(p => p.inStock).length;
  const categories = new Set(data.map(p => p.category)).size;
  const avgPrice = Math.round(data.reduce((sum, p) => sum + p.price, 0) / data.length);

  const stats = [
    {
      label: 'Produits disponibles',
      value: inStockProducts,
      total: totalProducts,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Catégories',
      value: categories,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Prix moyen',
      value: `${new Intl.NumberFormat('fr-FR').format(avgPrice)} FCFA`,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Satisfaction client',
      value: '98%',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos chiffres clés
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez pourquoi nos clients nous font confiance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} rounded-lg p-6 text-center`}>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
                {stat.total && (
                  <span className="text-lg text-gray-500">/{stat.total}</span>
                )}
              </div>
              <div className="text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;