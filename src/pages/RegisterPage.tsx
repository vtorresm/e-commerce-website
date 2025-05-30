import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import { Eye, EyeOff, AlertCircle, Check } from 'lucide-react';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();
  
  // Password strength requirements
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  const passwordStrength = [
    hasMinLength, 
    hasUppercase, 
    hasLowercase, 
    hasNumber, 
    hasSpecialChar
  ].filter(Boolean).length;
  
  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!name || !email || !password || !confirmPassword) {
      setError('Por favor, completa todos los campos');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    
    if (passwordStrength < 3) {
      setError('La contraseña es demasiado débil');
      return;
    }
    
    try {
      setIsLoading(true);
      const success = await register(name, email, password);
      
      if (success) {
        navigate('/');
      } else {
        setError('Ha ocurrido un error al registrar tu cuenta');
      }
    } catch (err) {
      setError('Ha ocurrido un error. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Crear Cuenta</h1>
              <p className="text-gray-600">
                Únete a nosotros para descubrir productos increíbles
              </p>
            </div>
            
            {error && (
              <div className="mb-6 bg-red-50 text-red-700 p-4 rounded-md flex items-start">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Juan Pérez"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tu@ejemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                
                {/* Password strength meter */}
                {password && (
                  <div className="mt-2">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getPasswordStrengthColor()}`} 
                        style={{ width: `${(passwordStrength / 5) * 100}%` }}
                      ></div>
                    </div>
                    
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className={`flex items-center ${hasMinLength ? 'text-green-600' : 'text-gray-500'}`}>
                        {hasMinLength ? <Check className="w-4 h-4 mr-1" /> : <span className="w-4 h-4 mr-1">•</span>}
                        Al menos 8 caracteres
                      </li>
                      <li className={`flex items-center ${hasUppercase ? 'text-green-600' : 'text-gray-500'}`}>
                        {hasUppercase ? <Check className="w-4 h-4 mr-1" /> : <span className="w-4 h-4 mr-1">•</span>}
                        Al menos una mayúscula
                      </li>
                      <li className={`flex items-center ${hasNumber ? 'text-green-600' : 'text-gray-500'}`}>
                        {hasNumber ? <Check className="w-4 h-4 mr-1" /> : <span className="w-4 h-4 mr-1">•</span>}
                        Al menos un número
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {password && confirmPassword && password !== confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">Las contraseñas no coinciden</p>
                )}
              </div>
              
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  Acepto los <Link to="/terms" className="text-blue-600 hover:text-blue-700">términos y condiciones</Link>
                </label>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isLoading}
              >
                Crear cuenta
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  ¿Ya tienes cuenta?{' '}
                  <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Inicia sesión
                  </Link>
                </p>
              </div>
            </form>
            
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    O regístrate con
                  </span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Google
                </button>
                <button className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;