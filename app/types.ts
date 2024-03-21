"use client"

export type Review = {
    id: string;
    username: string;
    rating: number;
    description: string;
  };
  
  export type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    discountedPrice: number;
    imageUrl: string; 
    rating: number;
    tags: string[];
    reviews: Review[];
  };
  

  
  export type CartItem ={
    id: string;
    quantity: number;
    product: Product;
    imageUrl: string;
  }
  
  export type CartState = {
    cartItems: CartItem[];
    totalItems: number;
    totalPrice: number;
  }