import React, { useState } from 'react';
import Button from '../ui/Button';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // This would normally call an API
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };
  
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-blue-100 mb-8">
            Suscríbete a nuestro boletín para recibir ofertas exclusivas, novedades y consejos de estilo personalizados.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <p className="text-xl font-medium mb-2">¡Gracias por suscribirte!</p>
              <p>Te hemos enviado un correo de confirmación. Revisa tu bandeja de entrada.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <Button 
                type="submit" 
                variant="secondary" 
                size="lg"
                className="whitespace-nowrap"
              >
                Suscribirme
              </Button>
            </form>
          )}
          
          <p className="text-blue-200 text-sm mt-4">
            Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;