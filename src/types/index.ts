export interface Product {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  category: string;
  subCategory: string;
  description: string;
  features: string[];
  images: string[];
  colors: string[];
  sizes?: string[];
  specifications?: Record<string, string>;
  stock: number;
  rating: number;
  reviews: Review[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color?: string;
  size?: string;
}

export interface Category {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  categoryId: string;
}

export type FilterOptions = {
  category?: string;
  subCategory?: string;
  minPrice?: number;
  maxPrice?: number;
  colors?: string[];
  sizes?: string[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  total: number;
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface PromoCode {
  code: string;
  discount: number;
  expiryDate: string;
}