import { AiFillFire } from "react-icons/ai";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Link  from 'next/link'; 
import useCartStore from "../Store/cart";
import { Product } from "../types";

export default function Header() {
  const { cart, addToCart, removeFromCart } = useCartStore();

  // Calculate subtotal and total discounted price
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalDiscountedPrice = cart.reduce((total, item) => {
    if (item.discountedPrice) {
      return total + item.discountedPrice * item.quantity;
    }
    return total + item.price * item.quantity;
  }, 0);

  // Round up the total price to two decimal places
  const roundedSubtotal = subtotal.toFixed(2);
  const roundedDiscountedPrice = totalDiscountedPrice.toFixed(2);

  // Function to increment quantity
  const incrementQuantity = (item: Product) => {
    addToCart(item);
  };

  // Function to decrement quantity
  const decrementQuantity = (item: Product) => {
    if (item.quantity > 1) {
      // Decrease the quantity by one if quantity is greater than 1
      removeFromCart(item);
    } else {
      // Remove the entire item if quantity is 1
      removeItem(item);
    }
  };

  // Function to remove item from cart
  const removeItem = (item: Product) => {
    removeFromCart(item);
  };

  return (
    <>
      <div className="navbar bg-black">
        <div className="flex-1">
          <Link href="/">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl">
                Supply & Co <AiFillFire />
              </span>
            </button>
          </Link>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cart.reduce((total, item) => total + item.quantity, 0)}</span> {/* Display total quantity in the cart */}
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{cart.reduce((total, item) => total + item.quantity, 0)} Items</span>
                <span className="text-info">Subtotal: ${roundedSubtotal}</span> 

                <div className="mt-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <img src={item.imageUrl} alt={item.title} className="w-10 h-12 full mr-2" />
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          {item.discountedPrice ? (
                            <p className="text-gray-500 line-through">${item.price}</p>
                          ) : (
                            <p className="text-gray-500">${item.price}</p>
                          )}
                          {item.discountedPrice && <p className="text-green-500">${item.discountedPrice}</p>}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button onClick={() => incrementQuantity(item)} className="text-gray-600 focus:outline-none">
                          <FaPlus />
                        </button>
                        <span className="mx-2">{item.quantity}</span> {/* Display item quantity */}
                        <button onClick={() => decrementQuantity(item)} className="text-gray-600 focus:outline-none mr-2">
                          <FaMinus />
                        </button>
                        <button onClick={() => removeItem(item)} className="text-red-600 focus:outline-none">
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card-actions mt-2">
                  <Link href="/cart"  className="btn btn-primary btn-block"> {/* Link to the cart page */}
                      View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
