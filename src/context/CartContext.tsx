import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity: number, color?: string, size?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);
  const [total, setTotal] = useState(0);

  // Calculate totals whenever items change
  useEffect(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    setItemCount(count);

    const cartTotal = items.reduce((sum, item) => {
      const price = item.product.discountPrice || item.product.price;
      return sum + (price * item.quantity);
    }, 0);
    setTotal(cartTotal);
  }, [items]);

  const addItem = (product: Product, quantity: number, color?: string, size?: string) => {
    setItems(prevItems => {
      // Check if product already exists in cart
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id && 
               item.color === color && 
               item.size === size
      );

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, { product, quantity, color, size }];
      }
    });
  };

  const removeItem = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      updateQuantity, 
      clearCart,
      itemCount,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};