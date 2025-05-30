import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  const discountPercentage = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100) 
    : 0;

  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      {product.isNew && (
        <div className="absolute top-2 left-2 z-10">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
            Nuevo
          </span>
        </div>
      )}
      
      {discountPercentage > 0 && (
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            -{discountPercentage}%
          </span>
        </div>
      )}
      
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
          
          <button 
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Add to wishlist"
          >
            <Heart className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-200" />
          </button>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800 line-clamp-1">{product.name}</h3>
          
          <div className="mt-1 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-sm text-gray-500">({product.reviews.length})</span>
            </div>
          </div>
          
          <div className="mt-2 flex items-center justify-between">
            <div>
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900">${product.discountPrice.toFixed(2)}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <Button 
              variant="primary" 
              size="sm"
              onClick={handleAddToCart}
              leftIcon={<ShoppingCart className="w-4 h-4" />}
            >
              Añadir
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;