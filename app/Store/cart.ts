import { create } from "zustand";
import { Product } from "../types";

// Define the interface of the Cart state
interface State {
    cart: Product[];
}

// Define the interface of the actions that can be performed in the Cart
interface Actions {
    addToCart: (item: Product) => void;
    removeFromCart: (item: Product) => void;
    emptyCart: () => void;
}

// Initialize a default state
const INITIAL_STATE: State = {
    cart: [],
};

// Create the store with Zustand, combining the state interface and actions
const useCartStore = create<State & Actions>((set) => ({
    // Initialize state
    ...INITIAL_STATE,

    // Define actions
    addToCart: (item: Product) => {
        set((state) => {
            const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);
            if (existingItemIndex !== -1) {
                // If item already exists in the cart, update its quantity
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex].quantity += 1;
                return { cart: updatedCart };
            } else {
                // If item doesn't exist in the cart, add it with quantity 1
                return { cart: [...state.cart, { ...item, quantity: 1 }] };
            }
        });
    },
    removeFromCart: (item: Product) => {
        set((state) => ({
            cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
        }));
    },
    emptyCart: () => {
        set({ cart: [] });
    },
}));

export default useCartStore;
