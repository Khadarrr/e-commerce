
import { useEffect, useState } from 'react';
import { Product } from '../types'; 

const ProductCard = ({ product }: { product: Product }) => (
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
          <p className="text-lg font-semibold text-gray-900 mr-2">${product.price}</p>
          {product.discountedPrice && (
            <p className="text-sm line-through text-gray-500">${product.discountedPrice}</p>
          )}
        </div>
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v5.25l4.06 2.361a1 1 0 01.122 1.637l-3.712 3.625 1.25 5.25a1 1 0 01-1.532 1.054l-4.438-3.188-4.438 3.188a1 1 0 01-1.532-1.054l1.25-5.25-3.712-3.625a1 1 0 01.122-1.637L9 8.25V3a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm">{product.rating}</p>
        </div>
      </div>
      <div className="mt-4">
        <ul className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <li key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      {product.reviews.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Reviews</h3>
          <ul>
            {product.reviews.map((review) => (
              <li key={review.id} className="mb-2">
                <p className="text-gray-600">
                  <span className="font-semibold">{review.username}:</span> {review.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const API_URL = 'https://api.noroff.dev/api/v1/online-shop';
      try {
        console.log('Fetching products from API...');
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log('Received data from API:', data);
  
        if (response.ok) {
          console.log('API call successful. Products received:', data);
          setProducts(data);
          setLoading(false);
        } else {
          console.error('Error fetching products:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium text-gray-900">Products</h1>
      {products.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default (ProductsPage);
