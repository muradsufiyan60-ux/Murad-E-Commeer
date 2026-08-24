import React from "react"
import { Link } from "react-router-dom"
import heroImg from "../assets/hero.jpg"

function Hero() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-coffee-cream to-white">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16 grid grid-cols-1 
      md:grid-cols-2 items-center gap-8">
        
        {/* Left Column: Text Content */}
        <div className="w-full text-center md:text-left">
          <p className="bg-coffee-orange text-white inline-flex items-center py-1.5 px-3 rounded-full
           text-xs sm:text-sm font-medium">
            ☕ Fresh, Fast Order
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-coffee-brown leading-tight break-words">
            Fresh Coffee From <span className="text-coffee-orange">Murad</span> coffee shop
          </h1>
          <p className="mt-3 text-xs sm:text-base text-gray-700 max-w-md mx-auto md:mx-0">
            Order your favorite coffee and snacks online.
            Simple menu, quick checkout & smooth ordering experience.
          </p>
          <div className=" justify-center md:justify-start flex flex-wrap mt-5 gap-2.5 items-center">
            <Link
              to="/Menu"
              className="bg-coffee-orange text-white py-2 px-5 text-sm sm:text-base 
              rounded-full hover:bg-coffee-brown transition inline-block"
            >
              Explore Menu
            </Link>
            <Link
              to="/cart"
              className="py-2 px-5 border border-coffee-orange text-coffee-brown text-sm
               sm:text-base rounded-full hover:border-coffee-brown transition inline-block"
            >
              View Cart
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="w-full flex justify-center">
          <img 
            src={heroImg} 
            alt="hero coffee" 
           className="w-full max-w-[280px] sm:max-w-md md:max-w-full h-auto object-contain " 
          />
        </div>

      </div>
    </section>
  )
}

export default Hero;