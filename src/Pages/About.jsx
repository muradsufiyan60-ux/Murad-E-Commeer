import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiAward, 
  FiHeart, 
  FiSmile, 
  FiCoffee, 
  FiCheckCircle, 
  FiUsers, 
  FiClock, 
  FiArrowRight 
} from 'react-icons/fi';

export default function About() {
  const stats = [
    { label: "Premium Blends", value: "15+", icon: <FiCoffee size={24} /> },
    { label: "Happy Customers", value: "10k+", icon: <FiUsers size={24} /> },
    { label: "Years of Craft", value: "5+", icon: <FiClock size={24} /> },
    { label: "Quality Rating", value: "4.9★", icon: <FiAward size={24} /> },
  ];

  const values = [
    {
      icon: <FiHeart size={32} className="text-coffee-orange" />,
      title: "Ethically Sourced",
      description: "We source 100% organic beans directly from sustainable, local coffee farms in Ethiopia."
    },
    {
      icon: <FiAward size={32} className="text-coffee-orange" />,
      title: "Master Roasting",
      description: "Our micro-batch roasting techniques unlock rich, complex flavors tailored to every blend."
    },
    {
      icon: <FiSmile size={32} className="text-coffee-orange" />,
      title: "Community Warmth",
      description: "Every cup is served with genuine care, turning everyday coffee routines into special moments."
    }
  ];

  return (
    <div className="bg-coffee-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-coffee-brown to-[#2c1a0e] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coffee-orange/20 text-coffee-orange border border-coffee-orange/30 font-semibold text-xs tracking-wide uppercase">
            <FiCoffee className="animate-bounce" /> The Murad Story
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Crafting Extraordinary Coffee <br />
            <span className="text-coffee-orange">For Extraordinary People.</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
            Welcome to Murad Coffee Shop. From rich traditional roasts to contemporary handcrafted brews, we bring passion, quality, and warmth to every single cup.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white border border-coffee-caramel/30 rounded-2xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1 border-r last:border-r-0 border-gray-100">
              <div className="flex justify-center text-coffee-orange mb-1">{stat.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-coffee-brown">{stat.value}</h3>
              <p className="text-xs sm:text-sm font-medium text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
        {/* Our Story Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-coffee-orange font-bold text-sm tracking-wider uppercase">Our Tradition & Passion</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-coffee-brown leading-tight">
              Rooted in Coffee Heritage, Built for Modern Moments
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Murad Coffee Shop was founded with a clear vision: to celebrate rich coffee traditions while delivering a seamless, modern experience. Located in Maya City, Ethiopia, we take pride in picking high-grade single-origin beans and roasting them to perfection.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                "100% Handpicked Specialty Beans",
                "Freshly Brewed On-Demand Daily",
                "Fast & Hassle-Free Online Ordering"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-coffee-brown font-semibold text-sm sm:text-base">
                  <FiCheckCircle className="text-coffee-orange shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-coffee-orange/20 rounded-3xl transform rotate-2 blur-xs"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                alt="Murad Coffee Shop Atmosphere"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Brand Core Values */}
        <section className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-coffee-brown">Why Choose Murad Coffee?</h2>
            <p className="text-gray-600 text-sm sm:text-base">Our commitment to quality guides everything we craft.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <div 
                key={index} 
                className="bg-white border border-coffee-caramel/30 hover:border-coffee-orange/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-coffee-brown mb-3">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="bg-coffee-brown rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl space-y-6">
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-coffee-orange/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-coffee-orange/20 rounded-full blur-2xl"></div>

          <h2 className="text-2xl sm:text-4xl font-extrabold">Ready to Taste the Difference?</h2>
          <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base">
            Explore our curated menu of espresso drinks, iced specials, and freshly baked pastries.
          </p>
          <div className="pt-2">
            <Link
              to="/Menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-coffee-orange text-white font-bold rounded-xl hover:bg-orange-600 transition shadow-lg hover:shadow-orange-500/30"
            >
              Explore Our Menu <FiArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}