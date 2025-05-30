import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, CreditCard, Truck, Package, RefreshCw } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Features */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center">
              <div className="mr-4 text-blue-500">
                <Truck className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-bold text-white">Envío Gratis</h3>
                <p className="text-sm text-gray-400">En pedidos superiores a $50</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4 text-blue-500">
                <RefreshCw className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-bold text-white">Devolución Fácil</h3>
                <p className="text-sm text-gray-400">30 días para cambios y devoluciones</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4 text-blue-500">
                <CreditCard className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-bold text-white">Pago Seguro</h3>
                <p className="text-sm text-gray-400">Métodos de pago encriptados</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4 text-blue-500">
                <Package className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-bold text-white">Garantía de Calidad</h3>
                <p className="text-sm text-gray-400">Productos seleccionados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Sobre Nosotros</h2>
            <p className="text-gray-400 mb-4">
              ElegantShop es tu destino para compras online de alta calidad. Ofrecemos una amplia selección de productos con la mejor relación calidad-precio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Categorías</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/category/clothing" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Ropa</Link>
              </li>
              <li>
                <Link to="/category/clothing/casual" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Ropa Casual</Link>
              </li>
              <li>
                <Link to="/category/clothing/sports" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Ropa Deportiva</Link>
              </li>
              <li>
                <Link to="/category/tech" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Tecnología</Link>
              </li>
              <li>
                <Link to="/category/tech/smartphones" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Smartphones</Link>
              </li>
              <li>
                <Link to="/category/tech/laptops" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Laptops</Link>
              </li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Información</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Acerca de Nosotros</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Contacto</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Envíos y Devoluciones</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Contáctanos</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Av. Principal 123, Ciudad Central, CP 28000</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">info@elegantshop.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-white font-medium mb-2">Suscríbete al boletín</h3>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ElegantShop. Todos los derechos reservados.
            </p>
            
            <div className="mt-4 md:mt-0">
              <img 
                src="https://images.pexels.com/photos/3943763/pexels-photo-3943763.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Payment Methods" 
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;