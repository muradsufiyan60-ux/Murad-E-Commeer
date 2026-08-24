import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data/products';
import AddToCart from '../components/addTocart';
import { FiArrowLeft } from 'react-icons/fi';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center px-4">
        <h1 className="text-3xl font-bold text-coffee-brown mb-2">
          Product Not Found
        </h1>
        <p className="text-gray-500 mb-6">
          We couldn't find the coffee you're looking for.
        </p>
        <Link
          to="/Menu"
          className="inline-block px-6 py-3 bg-coffee-orange text-white font-bold rounded-lg hover:bg-coffee-brown transition"
        >
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-coffee-cream min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/Menu"
          className="inline-flex items-center gap-2 text-coffee-brown font-semibold mb-6 hover:text-coffee-orange transition"
        >
          <FiArrowLeft size={20} /> Back to Menu
        </Link>

        <div className="bg-white border border-coffee-caramel rounded-xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 sm:h-80 md:h-full w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-coffee-brown mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                {product.description}
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-coffee-orange mb-6">
                ${product.price}
              </p>
            </div>

            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}