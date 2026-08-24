import React from 'react';
import { Link } from 'react-router-dom';
import { FiCoffee, FiHome } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5">
      <div className="text-center">
        <FiCoffee size={64} className="mx-auto text-coffee-orange mb-4" />
        <h1 className="text-6xl font-extrabold text-coffee-orange mb-4">404</h1>
        <h2 className="text-2xl font-bold text-coffee-brown mb-6">
          Page Not Found
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full">
          <Link
            to="/Menu"
            className="w-full sm:w-auto px-6 py-3 bg-coffee-orange text-white font-bold rounded-xl hover:bg-coffee-brown transition-colors"
          >
            Order More
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 border border-coffee-orange text-coffee-orange font-bold rounded-xl hover:bg-coffee-orange hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <FiHome size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}