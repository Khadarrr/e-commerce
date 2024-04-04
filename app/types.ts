export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    discountedPrice?: number; 
    imageUrl: string;
    rating: number;
    tags: string[];
    reviews: Review[];
    quantity: number
  }
  
  export interface Review {
    id: string;
    username: string;
    rating: number;
    description: string;
  }