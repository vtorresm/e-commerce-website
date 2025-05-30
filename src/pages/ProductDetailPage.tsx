import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Share2, ShoppingCart, ChevronRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { getProductsByCategory } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = id ? getProductById(id) : undefined;
  
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes ? product.sizes[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Get related products
  const relatedProducts = product 
    ? getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4) 
    : [];
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h2>
        <p className="text-gray-600 mb-6">Lo sentimos, el producto que estás buscando no existe.</p>
        <Button onClick={() => navigate('/')}>Volver a la tienda</Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor, selectedSize);
  };
  
  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Inicio</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to={`/category/${product.category}`} className="hover:text-blue-600">
              {product.category === 'clothing' ? 'Ropa' : 'Tecnología'}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link 
              to={`/category/${product.category}/${product.subCategory}`} 
              className="hover:text-blue-600"
            >
              {product.subCategory}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-gray-100">
              <img 
                src={product.images[activeImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`aspect-square rounded overflow-hidden border-2 ${index === activeImageIndex ? 'border-blue-600' : 'border-transparent'}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - Vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">({product.reviews.length} reseñas)</span>
            </div>
            
            <div className="mb-6">
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900">${product.discountPrice.toFixed(2)}</span>
                  <span className="ml-3 text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Color:</h3>
                <div className="flex space-x-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`w-10 h-10 rounded-full ${selectedColor === color ? 'ring-2 ring-offset-2 ring-blue-600' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Color ${color}`}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Size Selection */}
            {product.sizes && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-900">Talla:</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700">Guía de tallas</button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`py-2 border rounded-md text-sm font-medium ${
                        selectedSize === size 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Cantidad:</h3>
              <div className="flex border border-gray-300 rounded-md w-32">
                <button 
                  className="px-3 py-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full text-center focus:outline-none"
                  min="1"
                />
                <button 
                  className="px-3 py-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                  onClick={() => setQuantity(prev => prev + 1)}
                  disabled={quantity === product.stock}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth
                leftIcon={<ShoppingCart className="w-5 h-5" />}
                onClick={handleAddToCart}
              >
                Añadir al carrito
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                leftIcon={<Heart className="w-5 h-5" />}
              >
                Favorito
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                leftIcon={<Share2 className="w-5 h-5" />}
              >
                Compartir
              </Button>
            </div>
            
            {/* Features */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Truck className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">
                  Envío gratis en pedidos superiores a $50
                </span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">
                  Garantía de calidad
                </span>
              </div>
              <div className="flex items-center">
                <RefreshCw className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">
                  30 días para devoluciones
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'description' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Descripción
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'specifications' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('specifications')}
              >
                Especificaciones
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'reviews' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reseñas ({product.reviews.length})
              </button>
            </nav>
          </div>
          
          <div className="py-6">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Características del producto</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div>
                {product.specifications ? (
                  <div className="border rounded-lg overflow-hidden">
                    {Object.entries(product.specifications).map(([key, value], index, arr) => (
                      <div 
                        key={key} 
                        className={`flex ${index !== arr.length - 1 ? 'border-b' : ''}`}
                      >
                        <div className="w-1/3 bg-gray-50 px-4 py-3 font-medium text-gray-900">{key}</div>
                        <div className="w-2/3 px-4 py-3 text-gray-700">{value}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-600">
                    <p>No hay especificaciones técnicas disponibles para este producto.</p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                {product.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviews.map(review => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-center mb-2">
                          <h4 className="text-lg font-medium text-gray-900 mr-2">{review.userName}</h4>
                          <span className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-600">
                    <p>No hay reseñas para este producto todavía. ¡Sé el primero en comentar!</p>
                  </div>
                )}
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Escribe una reseña</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                        Valoración
                      </label>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            className="p-1 focus:outline-none"
                          >
                            <Star className="w-6 h-6 text-gray-300" />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                        Comentario
                      </label>
                      <textarea
                        id="comment"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Comparte tu opinión sobre este producto..."
                      ></textarea>
                    </div>
                    
                    <Button type="submit">
                      Enviar reseña
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">También te puede interesar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;