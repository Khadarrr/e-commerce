import React from 'react';
import Header from "../Components/header";
import ProductDetailPage from '../Components/productDetail';
import { SparklesCore } from "../Components/UI/sparkles";
import { Product } from '../types';

export default function ProductPage() { // Renamed from CartPage to ProductPage
  const product: Product = {
    id: '1',
    title: 'Product Title',
    description: 'Product Description',
    imageUrl: 'product-image.jpg',
    price: 100,
    discountedPrice: 90,
    rating: 4.5,
    tags: ['Tag1', 'Tag2'],
    quantity: 10,
    reviews: []
  };

  return (
    <>
      <Header />
      <div className="h-screen bg-black">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
          particleColor="#FFFFFF"
        />
        <ProductDetailPage product={product} />
      </div>
    </>
  );
}
