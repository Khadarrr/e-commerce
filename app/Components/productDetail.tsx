"use client"
import React, { useEffect, useState } from 'react';
import { Product } from '../types';

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {


  if (!product) {
    return <div>Loading product...</div>;
  }

  const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            className="w-full h-auto object-cover"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>
        <div className="p-6 flex flex-col justify-between md:w-2/3">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h2>
            <p className="text-base text-gray-600 mb-4">{product.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-900 mr-2">{formatPrice(product.price)}</p>
              {product.discountedPrice && (
                <p className="text-sm line-through text-gray-500">{formatPrice(product.discountedPrice)}</p>
              )}
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {/* Icon for product rating */}
              </svg>
              <p className="text-sm">{product.rating}</p>
            </div>
          </div>
          <div className="mt-4">
            <ul className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <li key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Assuming you have a parent component where you fetch products
// and pass them as props to ProductDetailPage

export default ProductDetailPage;
