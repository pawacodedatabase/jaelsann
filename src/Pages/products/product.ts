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
  import img9 from '../../assets/chu.jpg'
  import star from '../../assets/star.jpg'
  import bks1 from '../../assets/bks.jpg'
  import bks2 from '../../assets/bks2.jpg'
  import ss from '../../assets/ss.jpg'
  import bbm from '../../assets/bbm.jpg'
  import ccm from '../../assets/ccm.jpg'
  import cho from '../../assets/cho.jpg'
  import hal from '../../assets/hal.jpg'
  import chunk_1 from '../../assets/chc_1.jpg'
  import chunk_2 from '../../assets/chc_2.jpg'
  import chunk_3 from '../../assets/chc_3.jpg'
  import chunk_4 from '../../assets/chc_4.jpg'
  import chunk_5 from '../../assets/chc_5.jpg'
  import chunk_6 from '../../assets/chc_6.jpg'
  import chunk_7 from '../../assets/chc_7.jpg'
  import chunk_8 from '../../assets/chc_8.jpg'
  import chunk_9 from '../../assets/chc_9.jpg'
  import chunk_10 from '../../assets/chc_10.jpg'
  // import chunk_10 from '../../assets5hc.jpg'
  // import chunk_10 from '../../assets/hc.jpg'

 export const products: Product[] = [
   {
     id: 1,
     name: 'Honorable Pam',
     category: 'Shoes',
     subCategories: ['Men'],
     price: 25000,
     originalPrice: 30000,    isOnSale: true,
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
    {
      id: 8,
      name: 'Chunky Gloss',
      category: 'Shoes',
      subCategories: ['Male'],
      price: 50000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [img9],
    },
    {
      id: 9,
      name: 'Star black',
      category: 'Shoes',
      subCategories: ['Male'],
      price: 50000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [star],
    },
    {
      id: 10,
      name: 'Birkenstock',
      category: 'Shoes',
      subCategories: ['Unisex'],
      price: 25000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [bks1],
    },
    {
      id: 11,
      name: 'Female H- Slides',
      category: 'Shoes',
      subCategories: ['Women'],
      price: 20000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [bks2],
    },
    {
      id: 12,
      name: 'JA Sandals',
      category: 'Shoes',
      subCategories: ['unisex'],
      price: 35000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [ss],
    },
    {
      id: 13,
      name: 'JA Black Pam',
      category: 'Shoes',
      subCategories: ['Male'],
      price: 25000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [bbm],
    },
    {
      id: 14,
      name: 'Caramel Slippers',
      category: 'Shoes',
      subCategories: ['Women'],
      price: 15000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [ccm],
    },
    {
      id: 15,
      name: 'Chocolate Slides',
      category: 'Shoes',
      subCategories: ['Women'],
      price: 15000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [cho],
    },
    {
      id: 16,
      name: 'Half lady black',
      category: 'Shoes',
      subCategories: ['Women'],
      price: 13500,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [hal],
    },
    {
      id: 17,
      name: '',
      category: 'Shoes',
      subCategories: ['Women'],
      price: 15000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [],
    },
    {
      id: 18,
      name: 'Lady  Chocolate',
      category: 'Shoes',
      subCategories: ['Women'],
      price: 15000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [chunk_1],
    },
    {
      id: 19,
      name: 'H female Slides ',
      category: 'Shoes',
      subCategories: ['Women'],
      price: 15000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [chunk_2],
    },
    {
      id: 20,
      name: 'Platforms',
      category: 'Shoes',
      subCategories: ['Women'],
      price: 15000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [chunk_3],
    },
    {
      id: 21,
      name: 'Lady Simple',
      category: 'Shoes',
      subCategories: ['Women'],
      price: 15000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [chunk_4],
    },
    {
      id: 22,
      name: 'Honorable 2 Slides',
      category: 'Shoes',
      subCategories: ['Men'],
      price: 25000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [chunk_5],
    }
    ,
    
    {
      id: 23,
      name: 'Honourable 3',
      category: 'Shoes',
      subCategories: ['Men'],
      price: 25000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [chunk_6],
    },
    
    
    
    {
      id: 24,
      name: 'Honourable 4',
      category: 'Shoes',
      subCategories: ['Men'],
      price: 25000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [chunk_7],
    },
    
     
    {
      id: 25,
      name: 'Male  H-cut ',
      category: 'Shoes',
      subCategories: ['Men'],
      price: 25000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [chunk_8],
    },
  
    
    {
      id: 26,
      name: 'Chocolate B',
      category: 'Shoes',
      subCategories: ['Men'],
      price: 50000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [chunk_9],
    },
    

    
    {
      id: 27,
      name: 'white and black chunky ',
      category: 'Shoes',
      subCategories: ['Men'],
      price: 50000,
      
      description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
      images: [chunk_10],
    },
    

    
    // {
    //   id: 22,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
    //   images: [],
    // },
    
    // ,
    
    // {
    //   id: 22,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
    //   images: [],
    // },
    
    // ,
    
    // {
    //   id: 22,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
    //   images: [],
    // },
    
    // ,
    
    // {
    //   id: 22,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
    //   images: [],
    // },
    
    // ,
    
    // {
    //   id: 22,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
    //   images: [],
    // },
    
    // ,
    
    // {
    //   id: 22,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
    //   images: [],
    // },
    
    // ,
    
    // {
    //   id: 22,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
    //   images: [],
    // },
    
    // ,
    
    // {
    //   id: 22,
    //   name: '',
    //   category: 'Shoes',
    //   subCategories: ['Women'],
    //   price: 15000,
      
    //   description: `Step into style and comfort with Jaels Ann shoes – where elegance meets durability. Designed with premium materials and crafted to perfection, each pair complements your every move, ensuring you look and feel your best. Whether it's a casual day out, a formal occasion, or a night to remember, Jaels Ann shoes offer timeless designs and unmatched comfort, tailored to elevate your wardrobe and keep you confidently on your feet.`,
    //   images: [],
    // },
    


  ];
  