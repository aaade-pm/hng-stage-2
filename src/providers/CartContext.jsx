import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    console.table(cart);
  };

  const updateCartQuantity = (index, quantity) => {
    const newCart = cart.map((item, i) =>
      i === index ? { ...item, quantity } : item
    );
    setCart(newCart);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateCartQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
