import React from 'react';
import { useCart } from '../context/Cartcontext';

function AddToCart({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-coffee-orange hover:bg-coffee-brown rounded-2xl px-2 py-1 text-white"
    >
      add to cart
    </button>
  );
}

export default AddToCart;