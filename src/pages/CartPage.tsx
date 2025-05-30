import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, CreditCard, AlertCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [promoCode, setPromoCode] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  
  const handlePromoCode = () => {
    if (promoCode.toUpperCase() === 'WELCOME20') {
      setPromoDiscount(total * 0.2);
      setPromoError('');
    } else {
      setPromoError('Código promocional inválido');
      setPromoDiscount(0);
    }
  };
  
  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login?redirect=checkout');
    }
  };
  
  const subtotal = total;
  const shipping = subtotal > 50 ? 0 : 4.99;
  const finalTotal = subtotal + shipping - promoDiscount;
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Carrito de Compras</h1>
        
        {items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-6">Parece que no has añadido ningún producto a tu carrito todavía.</p>
            <Button onClick={() => navigate('/')}>
              Continuar comprando
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-900">
                      Productos ({items.length})
                    </h2>
                    <button 
                      className="text-sm text-red-600 hover:text-red-700 flex items-center"
                      onClick={() => clearCart()}
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Vaciar carrito
                    </button>
                  </div>
                </div>
                
                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={`${item.product.id}-${item.color}-${item.size}`} className="p-6">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:flex-shrink-0 mb-4 sm:mb-0">
                          <img 
                            src={item.product.images[0]} 
                            alt={item.product.name}
                            className="w-24 h-24 object-cover rounded-md"
                          />
                        </div>
                        
                        <div className="sm:ml-6 flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-base font-medium text-gray-900">
                                <Link to={`/product/${item.product.id}`} className="hover:text-blue-600">
                                  {item.product.name}
                                </Link>
                              </h3>
                              
                              <div className="mt-1 text-sm text-gray-600">
                                {item.color && (
                                  <p className="inline-block mr-4">
                                    Color: <span className="font-medium\" style={{ color: item.color }}>{item.color}</span>
                                  </p>
                                )}
                                
                                {item.size && (
                                  <p className="inline-block">
                                    Talla: <span className="font-medium">{item.size}</span>
                                  </p>
                                )}
                              </div>
                              
                              <div className="mt-2 flex items-center">
                                <div className="flex border border-gray-300 rounded-md">
                                  <button 
                                    className="px-3 py-1 text-gray-600 hover:text-gray-900"
                                    onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                                    disabled={item.quantity === 1}
                                  >
                                    -
                                  </button>
                                  <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.product.id, Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-12 text-center focus:outline-none"
                                    min="1"
                                  />
                                  <button 
                                    className="px-3 py-1 text-gray-600 hover:text-gray-900"
                                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  >
                                    +
                                  </button>
                                </div>
                                
                                <button 
                                  className="ml-4 text-sm text-red-600 hover:text-red-700"
                                  onClick={() => removeItem(item.product.id)}
                                >
                                  Eliminar
                                </button>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-base font-medium text-gray-900">
                                ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                              </p>
                              
                              {item.product.discountPrice && (
                                <p className="text-sm text-gray-500 line-through">
                                  ${(item.product.price * item.quantity).toFixed(2)}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="p-6 border-t border-gray-200">
                  <Link 
                    to="/" 
                    className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Continuar comprando
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Resumen del pedido</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">Gratis</span>
                    ) : (
                      <span className="text-gray-900 font-medium">${shipping.toFixed(2)}</span>
                    )}
                  </div>
                  
                  {promoDiscount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Descuento</span>
                      <span className="text-green-600 font-medium">-${promoDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="text-lg font-medium text-gray-900">Total</span>
                    <span className="text-xl font-bold text-gray-900">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Código promocional"
                      className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button 
                      className="bg-gray-200 hover:bg-gray-300 px-4 py-2 text-gray-700 font-medium rounded-r-md transition-colors duration-300"
                      onClick={handlePromoCode}
                    >
                      Aplicar
                    </button>
                  </div>
                  {promoError && (
                    <div className="mt-2 flex items-center text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {promoError}
                    </div>
                  )}
                  {promoDiscount > 0 && (
                    <div className="mt-2 text-green-600 text-sm">
                      ¡Código aplicado! Ahorro de ${promoDiscount.toFixed(2)}
                    </div>
                  )}
                </div>
                
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  leftIcon={<CreditCard className="w-5 h-5" />}
                  onClick={handleCheckout}
                >
                  Proceder al pago
                </Button>
                
                <div className="mt-4 text-center text-xs text-gray-500">
                  <p>Pagos seguros garantizados</p>
                  <div className="flex justify-center mt-2 space-x-2">
                    <span>Visa</span>
                    <span>Mastercard</span>
                    <span>PayPal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;