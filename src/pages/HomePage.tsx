import React from 'react';
import Banner from '../components/home/Banner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import NewsletterSection from '../components/home/NewsletterSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <Categories />
      
      {/* Promo Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Promo Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Envío Gratis</h3>
                <p className="text-gray-600">En todos los pedidos superiores a $50. Válido solo para envíos nacionales.</p>
              </div>
            </div>
            
            {/* Promo Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">20% de Descuento</h3>
                <p className="text-gray-600">En tu primera compra con el código: WELCOME20</p>
              </div>
            </div>
            
            {/* Promo Card 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Soporte 24/7</h3>
                <p className="text-gray-600">Nuestro equipo está disponible para ayudarte en cualquier momento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Arrivals Banner */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-5">
              <img 
                src="https://images.pexels.com/photos/1036804/pexels-photo-1036804.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="New Arrivals" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center">
              <div className="ml-8 md:ml-16 max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuevas Llegadas</h2>
                <p className="text-gray-200 mb-6 text-lg">Descubre las últimas tendencias en moda y tecnología</p>
                <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300">
                  Descubrir Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
    </div>
  );
};

export default HomePage;