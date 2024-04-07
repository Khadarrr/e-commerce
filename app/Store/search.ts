import create from "zustand";

// Define the search state and actions
const useSearchStore = create((set) => ({
  searchQuery: "",

  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));

export default useSearchStore;
