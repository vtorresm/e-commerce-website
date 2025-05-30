import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Banner: React.FC = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Desktop Banner */}
      <div className="hidden md:block">
        <div className="relative h-[500px]">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Banner principal" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div>
          </div>
          
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Nueva Colección<br /><span className="text-blue-500">Otoño 2023</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Descubre nuestra exclusiva colección con descuentos de hasta el 50%. Diseños modernos y materiales premium para todos los estilos.
              </p>
              <div className="flex space-x-4">
                <Button size="lg">
                  <Link to="/category/clothing">Ver colección</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/offers">Ver ofertas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Banner */}
      <div className="md:hidden">
        <div className="relative h-[400px]">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Banner principal" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/90"></div>
          </div>
          
          <div className="relative h-full container mx-auto px-4 flex items-center justify-center text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold text-white leading-tight mb-3">
                Nueva Colección<br /><span className="text-blue-500">Otoño 2023</span>
              </h1>
              <p className="text-base text-gray-300 mb-5">
                Descubre nuestra exclusiva colección con descuentos de hasta el 50%.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Button size="lg" fullWidth>
                  <Link to="/category/clothing">Ver colección</Link>
                </Button>
                <Button variant="outline" size="lg" fullWidth>
                  <Link to="/offers">Ver ofertas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;