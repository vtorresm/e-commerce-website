import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { categories } from '../../data/products';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 text-center text-sm">
        <p>Envío gratis en compras superiores a $50 | Usa el código: WELCOME20 para 20% de descuento</p>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600 flex items-center">
            <ShoppingCart className="w-6 h-6 mr-2" />
            ElegantShop
          </Link>
          
          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <button 
                  type="submit"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
          
          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            {/* User Account */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isAuthenticated ? (
                  <div className="flex items-center">
                    <img 
                      src={user?.avatar || 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100'} 
                      alt={user?.name} 
                      className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
                    />
                    <span className="ml-1 hidden md:inline-block text-sm font-medium">
                      {user?.name.split(' ')[0]}
                    </span>
                  </div>
                ) : (
                  <>
                    <User className="w-6 h-6" />
                    <span className="ml-1 hidden md:inline-block text-sm font-medium">Cuenta</span>
                  </>
                )}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                  {isAuthenticated ? (
                    <>
                      <Link 
                        to="/account" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Mi cuenta
                      </Link>
                      <Link 
                        to="/orders" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Mis pedidos
                      </Link>
                      <button 
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Cerrar sesión
                      </button>
                    </>
                  ) : (
                    <>
                      <Link 
                        to="/login" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Iniciar sesión
                      </Link>
                      <Link 
                        to="/register" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Registrarse
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
            
            {/* Shopping Cart */}
            <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-blue-600">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              <span className="ml-1 hidden md:inline-block text-sm font-medium">Carrito</span>
            </Link>
          </div>
        </div>
        
        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex mt-4">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Inicio</Link>
            </li>
            {categories.map((category) => (
              <li key={category.id} className="group relative">
                <Link 
                  to={`/category/${category.id}`} 
                  className="text-gray-700 hover:text-blue-600 font-medium flex items-center"
                >
                  {category.name}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
                
                <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-50">
                  <ul className="py-1">
                    {category.subCategories.map((subCategory) => (
                      <li key={subCategory.id}>
                        <Link 
                          to={`/category/${category.id}/${subCategory.id}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subCategory.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            <li>
              <Link to="/offers" className="text-gray-700 hover:text-blue-600 font-medium">Ofertas</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contacto</Link>
            </li>
          </ul>
        </nav>
        
        {/* Search Bar - Mobile */}
        <div className="mt-4 md:hidden">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </form>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-3">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <div className="py-2">
                    <Link 
                      to={`/category/${category.id}`}
                      className="text-gray-700 hover:text-blue-600 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                    
                    <ul className="ml-4 mt-1 space-y-1">
                      {category.subCategories.map((subCategory) => (
                        <li key={subCategory.id}>
                          <Link 
                            to={`/category/${category.id}/${subCategory.id}`}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subCategory.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
              <li>
                <Link 
                  to="/offers" 
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ofertas
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;