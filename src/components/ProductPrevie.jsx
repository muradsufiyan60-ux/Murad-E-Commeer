import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import AddToCart from './addTocart'; // Consistent capitalization

function ProductPreview() {
  return (
    <section className="py-8 sm:py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-extrabold 
        text-coffee-orange text-center sm:text-left">
          Popular Picks
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
         sm:gap-6 justify-items-center">
          {products.map((product) => (
            <div
              key={product.id} // Added unique key
              className="w-full max-w-xs sm:max-w-none border rounded-2xl border-coffee-caramel/40
               bg-white p-3 sm:p-4 shadow-sm hover:shadow-xl 
              hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-xl h-44 sm:h-48 w-full mb-3">
                  <Link to={`/product/${product.id}`} className="block w-full h-full">
                    <img
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>
                </div>

                {/* Details */}
                <div className="px-1">
                  <h3 className="font-bold text-base sm:text-lg text-coffee-orange truncate">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium my-1 line-clamp-2 h-8">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="mt-3">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-coffee-orange font-extrabold text-base sm:text-lg">
                    ${product.price}
                  </span>
                  <AddToCart product={product} />
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="block w-full text-center bg-coffee-caramel text-coffee-brown text-xs 
                  sm:text-sm font-semibold py-2 rounded-full hover:bg-coffee-orange hover:text-white 
                  transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductPreview;