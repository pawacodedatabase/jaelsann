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

  import hon from '../../assets/hon.jpg'
  import img2 from '../../assets/hfm.jpg'
  import img3 from '../../assets/hfmm.jpg'
  import img4 from '../../assets/rose.jpg'
  import img5 from '../../assets/belt1.jpg'
  import img6 from '../../assets/belt2.jpg'
  import wal from '../../assets/wal.jpg'
  import img7 from '../../assets/br1.jpg'
  import img8 from '../../assets/br2.jpg'
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'Honorable Pam',
      category: 'Shoes',
      subCategories: ['Men'],
      price: 25000,
      originalPrice: 30000,
      isOnSale: true,
      description: `An Honourable Bespoke Pam by Jaels Ann is the epitome of timeless elegance and bespoke craftsmanship. Designed with precision and care, each piece is a unique reflection of your individuality, brought to life through Jaels Ann's dedication to quality and artistry. Crafted from the finest materials and tailored to perfection, it embodies grace, sophistication, and an undeniable sense of honor. Perfect for marking life’s most memorable moments, an Honourable Bespoke Pam by Jaels Ann is more than an accessory—it’s a statement of enduring style and refinement`,
      images: [hon],
    },
    {
      id: 2,
      name: 'H-Female slide',
      category: 'Shoes',
      subCategories: ['Women'],
      price: 15000,
      description: 'The Honourable Bespoke Slide by Jaels Ann is where comfort meets elegance. Designed exclusively for women who appreciate style and functionality, this bespoke slide is crafted with premium materials for an effortlessly chic look. Featuring a sleek, minimalist design and a tailored fit, it offers unparalleled comfort without compromising on sophistication. Perfect for casual outings or relaxing days, the Jaels Ann slide ensures you step out with confidence and grace, every time. Redefine luxury with a touch of bespoke artistry.',
      images: [img2],
    },
    {
      id: 3,
      name: 'JA Couples set',
      category: 'Shoes',
      subCategories: ['unisex'],
      price: 36500,
      isOnSale: false,
      description: 'Comfortable and stylish slide sandals.',
      images: [img3],
    },
    {
      id: 4,
      name: 'JA Rose Slides',
      category: 'shoes',
      subCategories: ['Women'],
      price: 15000,
      
      description: `Red Slippers by Jaels Ann radiate bold elegance and undeniable charm. Carefully handcrafted to perfection, these bespoke slippers are made from premium materials, offering a luxurious feel and a perfect fit. The striking red hue embodies confidence and sophistication, making them an exquisite choice for any occasion. Whether you're making a statement at an event or indulging in everyday luxury, Jaels Ann's Red Slippers ensure you stand out with style and grace. Experience the perfect blend of comfort and glamour with this timeless masterpiece.`,
      images: [img4],
    },
    {
      id: 5,
      name: 'Reversible Belt',
      category: 'Accessories',
      subCategories: ['male'],
      price: 13500,
     
      description: `Reversible Belt by Jaels Ann combines versatility with refined elegance. Expertly crafted from premium, durable materials, this bespoke accessory offers two distinct styles in one, seamlessly transitioning from classic sophistication to contemporary chic. Designed for the modern individual who values both functionality and fashion, this reversible belt is the perfect addition to any wardrobe. Whether dressing up for a formal event or adding a polished touch to a casual outfit, the Jaels Ann Reversible Belt ensures you stay effortlessly stylish and impeccably put-together.`,
      images: [img5, img6],
    },
    {
      id: 6,
      name: 'Honourable Wallet',
      category: 'accessories',
      subCategories: ['unisex'],
      price: 10000,
      
      description: `The Honourable Wallet by Jaels Ann is the ultimate expression of timeless sophistication and practicality. Meticulously handcrafted from premium materials, this bespoke wallet offers a perfect balance of style and functionality. Thoughtfully designed with multiple compartments, it ensures effortless organization for your essentials while maintaining a sleek, compact silhouette. Whether you're carrying it for everyday use or special occasions, the Jaels Ann Wallet stands as a testament to refined taste and impeccable craftsmanship, ensuring you make a lasting impression wherever you go.`,
      images: [wal],
    },
    {
      id: 7,
      name: 'JA Brown Pam Slippers',
      category: 'Shoes',
      subCategories: ['Women'],
      price: 15000,
      
      description: `The  Brown Pam Slippers by Jaels Ann are a perfect fusion of understated elegance and unmatched comfort. Designed for the modern woman, these bespoke slippers feature a rich brown hue that exudes warmth and versatility. Crafted from premium materials with a focus on durability and style, they offer a tailored fit and a soft, cushioned sole for all-day wear. Whether paired with casual ensembles or semi-formal attire, the Jaels Ann Brown Pam Slippers add a touch of refined sophistication to every step you take.`,
      images: [img7, img8],
    },
    // {
    //   id: 8,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: ``,
    //   images: [],
    // },
    // {
    //   id: 8,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: ``,
    //   images: [],
    // },
    // {
    //   id: 8,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: ``,
    //   images: [],
    // },
    // {
    //   id: 8,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: ``,
    //   images: [],
    // },
    // {
    //   id: 8,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: ``,
    //   images: [],
    // },
    // {
    //   id: 8,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: ``,
    //   images: [],
    // },
    // {
    //   id: 8,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: ``,
    //   images: [],
    // },
    // {
    //   id: 8,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: ``,
    //   images: [],
    // },
    // {
    //   id: 8,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: ``,
    //   images: [],
    // },
    // {
    //   id: 8,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: ``,
    //   images: [],
    // },
    // {
    //   id: 8,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: ``,
    //   images: [],
    // },
  ];
  