
import useCartStore from "../Store/cart";
import { Product } from "../types";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart } = useCartStore();

  // Function to remove item from cart
  const removeItem = (item: Product) => {
    removeFromCart(item);
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium text-900 mb-4">Cart</h1>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-4">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.title} className="w-20 h-20 mr-4" />
                <div>
                  <h2 className="text-lg font-semibold text-900">{item.title}</h2>
                  <p className="text-600">${item.price}</p>
                  <p className="text-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <button onClick={() => removeItem(item)} className="text-red-600">Remove</button>
            </div>
          ))}
          <div className="mt-8 flex items-center justify-between">
            <h2 className="text-lg font-semibold ">Total</h2>
            <p className="text-900">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="mt-8">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none">
            <Link href="/checkout">Continue to Checkout</Link>
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
