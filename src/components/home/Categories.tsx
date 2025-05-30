import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const Categories: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Explora Nuestras Categorías</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Clothing Category */}
          <div className="relative rounded-lg overflow-hidden group h-80">
            <img 
              src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Ropa" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Ropa</h3>
              <p className="text-gray-200 mb-4">Estilo y comodidad para todas las ocasiones</p>
              <div className="flex flex-wrap gap-2">
                {categories[0].subCategories.map(subCategory => (
                  <Link 
                    key={subCategory.id}
                    to={`/category/clothing/${subCategory.id}`}
                    className="bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm transition-colors duration-300"
                  >
                    {subCategory.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Technology Category */}
          <div className="relative rounded-lg overflow-hidden group h-80">
            <img 
              src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Tecnología" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Tecnología</h3>
              <p className="text-gray-200 mb-4">Lo último en innovación a tu alcance</p>
              <div className="flex flex-wrap gap-2">
                {categories[1].subCategories.map(subCategory => (
                  <Link 
                    key={subCategory.id}
                    to={`/category/tech/${subCategory.id}`}
                    className="bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm transition-colors duration-300"
                  >
                    {subCategory.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;