import { createContext } from "react";

//Stating intitial key:value pairs helps for better auto-completion but int really necessary (Still USe them Though)
const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
