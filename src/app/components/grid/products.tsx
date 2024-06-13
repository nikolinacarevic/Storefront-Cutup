export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  color: string;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: 'T-shirt', price: '€ 14.99', image: '/images/item1.png', color: 'white', 
    description: "The Medusa T-Shirt is made from a heavyweight, overdyed jersey, featuring contrasting mesh panels on each side that match the logo embroidery on the back."
  },
  { id: 2, name: 'Phone Case', price: '€ 9.99', image: '/images/item2.png' , color: 'white',
    description: "The Medusa phone case is crafted from durable yet sleek silicone, designed to provide reliable protection with a touch of style. Its smooth matte finish complements the embossed Medusa emblem on the back, adding a sophisticated touch to your everyday tech essentials."
   },
  { id: 3, name: 'Water Bottle', price: '€ 12.99', image: '/images/item3.png', color: 'white',
    description: "The Medusa water bottle combines functionality with elegance, crafted from high-quality stainless steel for durability and insulation. Its sleek design features a matte finish adorned with an engraved Medusa emblem, embodying both style and practicality. Perfect for staying hydrated on-the-go while making a sophisticated statement."
   },
  { id: 4, name: 'Tote', price: '€ 5.99', image: '/images/item4.png', color: 'black',
    description: "The Medusa tote bag blends versatility with luxury, crafted from premium vegan leather with meticulous attention to detail. Its spacious interior is ideal for carrying essentials, while the embossed Medusa emblem adds a touch of sophistication. Whether for daily errands or a chic accessory, this tote embodies timeless style and practicality."
   },
  { id: 5, name: 'Cap', price: '€ 6.99', image: '/images/item5.png', color: 'black',
    description: "The Medusa cap is a statement of contemporary style and comfort, crafted from premium cotton twill for a lightweight and breathable feel. Featuring an embroidered Medusa logo on the front and an adjustable strap at the back, it offers a personalized fit and enduring elegance. Perfect for casual outings or adding a touch of luxury to everyday attire."
   },
  { id: 6, name: 'Backpack', price: '€ 14.99', image: '/images/item6.png', color: 'black',
    description: "The Medusa backpack blends functionality with elegance, crafted from durable nylon with faux leather accents. It features spacious compartments and a padded laptop sleeve for ample storage and protection, complemented by the embossed Medusa emblem for a touch of luxury. Perfect for everyday use or travel, this backpack combines practicality with timeless style."
   },
  { id: 7, name: 'Sweatshirt', price: '€ 19.99', image: '/images/item7.png', color: 'gray' ,
    description: "The Medusa hoodie is made from a heavyweight, overdyed jersey, featuring contrasting mesh panels on each side that match the logo embroidery on the back."
  },
  { id: 8, name: 'Stickers', price: '€ 0.99', image: '/images/item8.png', color: 'white',
    description: "Medusa stickers offer a stylish accent with their sleek design and vibrant colors. Perfect for personalizing laptops, notebooks, or any smooth surface, these stickers showcase the iconic Medusa motif, adding a touch of sophistication to your everyday items."
   },
  { id: 9, name: 'T-shirt', price: '€ 14.99', image: '/images/item9.png', color: 'black' ,
    description: "The Medusa T-Shirt is made from a heavyweight, overdyed jersey, featuring contrasting mesh panels on each side that match the logo embroidery on the back."
  },
  { id: 10, name: 'Socks', price: '€ 3.99', image: '/images/item10.png', color: 'white',
    description: "Medusa socks blend comfort with style, crafted from soft, breathable cotton. Featuring the iconic Medusa logo woven into the fabric, they offer a subtle yet luxurious addition to your daily wardrobe."
   },
  { id: 11, name: 'Mug', price: '€ 10.99', image: '/images/item11.png', color: 'white',
    description: "The Medusa mug combines elegance with practicality, crafted from premium ceramic with a glossy finish. Featuring an embossed Medusa emblem, it adds a touch of sophistication to your morning coffee or tea ritual."
   },
];