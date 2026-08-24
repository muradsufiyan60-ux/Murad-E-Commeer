import React, { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import products from '../data/products';
import AddToCart from '../components/addTocart';

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="bg-coffee-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-coffee-orange mb-2">
            Our Menu ☕
          </h1>
          <p className="text-lg text-gray-500">
            Discover our premium selection of coffee.
          </p>
        </div>

        {/* Search Input */}
        <div className="mb-8 relative max-w-md">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search for coffee..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border-2 border-coffee-orange rounded-2xl focus:outline-none bg-white text-gray-800 placeholder-gray-400 shadow-sm"
          />
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-coffee-orange/30 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-coffee-brown text-lg">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="text-lg text-coffee-orange font-bold mt-2">
                      ${product.price}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 pt-0 space-y-2">
                  <AddToCart product={product} />
                  <Link
                    to={`/product/${product.id}`}
                    className="block w-full text-center  border bg-coffee-cream text-coffee-brown text-xs sm:text-sm font-semibold py-2 rounded-full hover:bg-coffee-orange hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No coffee found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}