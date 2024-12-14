export interface Product {
    id: number;
    name: string;
    category: string;
    subCategories: string[];
    price: number;
    originalPrice?: number; // For sale price comparison
    isOnSale?: boolean;
    description: string;
    images: string[];
    sizes?: string[];
    colors?: string[];
  }

  import img1 from '../../assets/banner1.webp'
  import img2 from '../../assets/banner2.jpeg'
  import img3 from '../../assets/banner3.webp'
  import img4 from '../../assets/banner4.webp'
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'Small Convertible Flex Bag',
      category: 'Bags',
      subCategories: ['Women'],
      price: 1900000,
      originalPrice: 2000000,
      isOnSale: true,
      description: 'A flexible and stylish convertible bag.',
      images: [img1,img2, img3, img4],
    },
    {
      id: 2,
      name: 'Studio Bag',
      category: 'Bags',
      subCategories: ['Women'],
      price: 20000,
      description: 'A sleek and modern studio bag for everyday use.',
      images: ['/images/studio-bag1.jpg', '/images/studio-bag2.jpg'],
    },
    {
      id: 3,
      name: 'Louise Slide Sandal',
      category: 'Shoes',
      subCategories: ['Women'],
      price: 2900000,
      originalPrice: 3000000,
      isOnSale: true,
      description: 'Comfortable and stylish slide sandals.',
      images: ['/images/sandal1.jpg', '/images/sandal2.jpg'],
    },
    {
      id: 4,
      name: 'Mini Naomi Bag',
      category: 'Bags',
      subCategories: ['Women'],
      price: 216.0,
      originalPrice: 228.0,
      isOnSale: true,
      description: 'A compact and trendy mini bag for special occasions.',
      images: ['/images/naomi-bag1.jpg', '/images/naomi-bag2.jpg'],
    },
  ];
  