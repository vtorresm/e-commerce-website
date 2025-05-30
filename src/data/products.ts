import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'clothing',
    name: 'Ropa',
    subCategories: [
      { id: 'casual', name: 'Casual', categoryId: 'clothing' },
      { id: 'sports', name: 'Deportiva', categoryId: 'clothing' },
      { id: 'formal', name: 'Formal', categoryId: 'clothing' }
    ]
  },
  {
    id: 'tech',
    name: 'Tecnología',
    subCategories: [
      { id: 'smartphones', name: 'Smartphones', categoryId: 'tech' },
      { id: 'laptops', name: 'Laptops', categoryId: 'tech' },
      { id: 'accessories', name: 'Accesorios', categoryId: 'tech' }
    ]
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Premium Algodón',
    price: 29.99,
    discountPrice: 24.99,
    category: 'clothing',
    subCategory: 'casual',
    description: 'Camiseta de algodón 100% orgánico. Perfecta para uso diario con un diseño minimalista y contemporáneo. Material de alta calidad para máxima comodidad y durabilidad.',
    features: ['100% Algodón orgánico', 'Corte regular', 'Lavable a máquina', 'Producción sostenible'],
    images: [
      'https://images.pexels.com/photos/5698850/pexels-photo-5698850.jpeg',
      'https://images.pexels.com/photos/5698847/pexels-photo-5698847.jpeg',
      'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg'
    ],
    colors: ['#FFFFFF', '#000000', '#6A7B76'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 100,
    rating: 4.8,
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'Carlos Mendez',
        rating: 5,
        comment: 'Excelente calidad, muy cómoda y el material es genial.',
        date: '2023-11-15'
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Ana Pérez',
        rating: 4.5,
        comment: 'Me encanta el diseño y el ajuste. Podría ser un poco más gruesa.',
        date: '2023-10-22'
      }
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Camisa Formal Slim Fit',
    price: 59.99,
    category: 'clothing',
    subCategory: 'formal',
    description: 'Camisa formal con corte slim fit, perfecta para ocasiones especiales o uso profesional. Confeccionada con algodón de alta calidad para un acabado elegante y duradero.',
    features: ['65% Algodón, 35% Poliéster', 'Corte slim fit', 'Planchar a baja temperatura', 'Cuello italiano'],
    images: [
      'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg',
      'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg',
      'https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg'
    ],
    colors: ['#FFFFFF', '#81A1C1', '#BF616A'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 75,
    rating: 4.6,
    reviews: [
      {
        id: 'r3',
        userId: 'u3',
        userName: 'Miguel Santos',
        rating: 5,
        comment: 'Excelente corte y calidad de tela. Muy recomendable.',
        date: '2023-11-05'
      }
    ],
    isFeatured: true
  },
  {
    id: '3',
    name: 'Camiseta Deportiva DryFit',
    price: 34.99,
    discountPrice: 29.99,
    category: 'clothing',
    subCategory: 'sports',
    description: 'Camiseta deportiva con tecnología de absorción de humedad, ideal para entrenamientos intensos. Material ligero y transpirable que mantiene el cuerpo seco durante la actividad física.',
    features: ['Tecnología DryFit', 'Transpirable', 'Secado rápido', 'Protección UV'],
    images: [
      'https://images.pexels.com/photos/4662356/pexels-photo-4662356.jpeg',
      'https://images.pexels.com/photos/6311640/pexels-photo-6311640.jpeg',
      'https://images.pexels.com/photos/6740354/pexels-photo-6740354.jpeg'
    ],
    colors: ['#3B4252', '#5E81AC', '#D08770'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 120,
    rating: 4.7,
    reviews: [
      {
        id: 'r4',
        userId: 'u4',
        userName: 'Laura Gómez',
        rating: 5,
        comment: 'Perfecta para correr, el material es muy fresco y cómodo.',
        date: '2023-11-18'
      },
      {
        id: 'r5',
        userId: 'u5',
        userName: 'Roberto Díaz',
        rating: 4,
        comment: 'Buena calidad, aunque las tallas son un poco pequeñas.',
        date: '2023-09-30'
      }
    ],
    isNew: true
  },
  {
    id: '4',
    name: 'Smartphone UltraPlus X20',
    price: 899.99,
    discountPrice: 799.99,
    category: 'tech',
    subCategory: 'smartphones',
    description: 'El smartphone más avanzado con una pantalla AMOLED de 6.7", cámara de 108MP y batería de larga duración. Rendimiento excepcional para todas tus necesidades.',
    features: ['Pantalla AMOLED 6.7"', 'Cámara 108MP', 'Batería 5000mAh', 'Procesador Octa-core 3.0GHz'],
    images: [
      'https://images.pexels.com/photos/1546901/pexels-photo-1546901.jpeg',
      'https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg',
      'https://images.pexels.com/photos/4526461/pexels-photo-4526461.jpeg'
    ],
    colors: ['#000000', '#ECE4D3', '#2E3440'],
    specifications: {
      'Procesador': 'Octa-core 3.0GHz',
      'RAM': '12GB',
      'Almacenamiento': '256GB',
      'Pantalla': 'AMOLED 6.7" 120Hz',
      'Cámara principal': '108MP + 12MP + 8MP',
      'Cámara frontal': '32MP',
      'Batería': '5000mAh',
      'Sistema Operativo': 'Android 13'
    },
    stock: 50,
    rating: 4.9,
    reviews: [
      {
        id: 'r6',
        userId: 'u6',
        userName: 'Daniel Torres',
        rating: 5,
        comment: 'Increíble teléfono, la cámara es espectacular y la batería dura más de un día completo.',
        date: '2023-11-20'
      }
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: '5',
    name: 'Laptop ProBook Air',
    price: 1299.99,
    category: 'tech',
    subCategory: 'laptops',
    description: 'Laptop ultraligera con potente procesador, pantalla retina y diseño elegante. Ideal para profesionales y creativos que necesitan rendimiento y portabilidad.',
    features: ['Procesador i7 última generación', 'SSD 512GB', '16GB RAM', 'Pantalla Retina 14"'],
    images: [
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
      'https://images.pexels.com/photos/5702364/pexels-photo-5702364.jpeg'
    ],
    colors: ['#D8DEE9', '#4C566A'],
    specifications: {
      'Procesador': 'Intel Core i7 11th Gen',
      'RAM': '16GB DDR4',
      'Almacenamiento': 'SSD 512GB',
      'Pantalla': '14" Retina (2560x1600)',
      'Gráficos': 'Intel Iris Xe',
      'Batería': 'Hasta 12 horas',
      'Sistema Operativo': 'Windows 11 Pro',
      'Peso': '1.3 kg'
    },
    stock: 30,
    rating: 4.8,
    reviews: [
      {
        id: 'r7',
        userId: 'u7',
        userName: 'Elena Castro',
        rating: 5,
        comment: 'Excelente laptop, muy rápida y la batería dura todo el día.',
        date: '2023-10-15'
      },
      {
        id: 'r8',
        userId: 'u8',
        userName: 'Juan Martínez',
        rating: 4.5,
        comment: 'Gran rendimiento, aunque se calienta un poco con tareas intensivas.',
        date: '2023-09-22'
      }
    ],
    isFeatured: true
  },
  {
    id: '6',
    name: 'Auriculares Inalámbricos NoiseCancel Pro',
    price: 199.99,
    discountPrice: 169.99,
    category: 'tech',
    subCategory: 'accessories',
    description: 'Auriculares premium con cancelación activa de ruido, sonido de alta fidelidad y hasta 30 horas de batería. Diseño ergonómico para máxima comodidad.',
    features: ['Cancelación activa de ruido', 'Bluetooth 5.2', '30 horas de batería', 'Micrófono integrado'],
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg',
      'https://images.pexels.com/photos/4381287/pexels-photo-4381287.jpeg'
    ],
    colors: ['#000000', '#FFFFFF', '#EBCB8B'],
    specifications: {
      'Tipo': 'Over-ear inalámbricos',
      'Conexión': 'Bluetooth 5.2, Cable 3.5mm',
      'Batería': 'Hasta 30 horas',
      'Cancelación de ruido': 'Activa (ANC)',
      'Micrófono': 'Integrado con reducción de ruido',
      'Controles': 'Táctiles',
      'Peso': '250g'
    },
    stock: 80,
    rating: 4.7,
    reviews: [
      {
        id: 'r9',
        userId: 'u9',
        userName: 'Patricia Flores',
        rating: 5,
        comment: 'La cancelación de ruido es impresionante, perfectos para trabajar en espacios ruidosos.',
        date: '2023-11-10'
      },
      {
        id: 'r10',
        userId: 'u10',
        userName: 'Fernando López',
        rating: 4.5,
        comment: 'Excelente sonido y batería de larga duración. Muy cómodos para uso prolongado.',
        date: '2023-10-05'
      }
    ],
    isNew: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductsBySubCategory = (subCategoryId: string): Product[] => {
  return products.filter(product => product.subCategory === subCategoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const filterProducts = (options: {
  category?: string;
  subCategory?: string;
  minPrice?: number;
  maxPrice?: number;
  colors?: string[];
  sizes?: string[];
}): Product[] => {
  return products.filter(product => {
    if (options.category && product.category !== options.category) return false;
    if (options.subCategory && product.subCategory !== options.subCategory) return false;
    if (options.minPrice && product.price < options.minPrice) return false;
    if (options.maxPrice && product.price > options.maxPrice) return false;
    if (options.colors && options.colors.length > 0 && !options.colors.some(color => product.colors.includes(color))) return false;
    if (options.sizes && options.sizes.length > 0 && product.sizes && !options.sizes.some(size => product.sizes?.includes(size))) return false;
    return true;
  });
};