import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX, FiUser } from "react-icons/fi";
import { useCart } from "../context/Cartcontext";
import { useAuth } from "../context/Authcontext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Safely extract cartCount with default fallback values
  const { cartCount = 0 } = useCart() || {};
  const { user = null } = useAuth() || {};

  const linkclass = ({ isActive }) =>
    isActive
      ? "text-coffee-orange font-bold border-b-2 border-coffee-orange pb-1 transition-all"
      : "text-gray-700 hover:text-coffee-orange font-medium transition-colors cursor-pointer";

  // Handles smooth scrolling to inline sections (#about, #contact)
  const handleSectionClick = (sectionId) => {
    setOpen(false);

    if (location.pathname !== "/") {
      // Navigate to Home page first, then scroll down
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Scroll smoothly directly on Home page
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-coffee-cream border-b border-coffee-orange/30 sticky top-0 z-50 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 focus:outline-none"
          >
            <span className="text-2xl">☕</span>
            <div className="font-bold text-lg tracking-tight">
              <span className="text-coffee-brown">Murad </span>
              <span className="text-coffee-orange">coffee shop</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="md:flex hidden items-center gap-8">
            <NavLink to="/" end className={linkclass}>
              Home
            </NavLink>
            <NavLink to="/Menu" className={linkclass}>
              Menu
            </NavLink>
            <button
              onClick={() => handleSectionClick("about")}
              className="text-gray-700 hover:text-coffee-orange font-medium transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleSectionClick("contact")}
              className="text-gray-700 hover:text-coffee-orange font-medium transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-5">
            {/* Cart Icon with Cart Badge */}
            <Link
              to="/Cart"
              className="text-coffee-brown relative hover:text-coffee-orange transition-colors"
              aria-label="Shopping Cart"
            >
              <FiShoppingCart size={24} />
              {Number(cartCount) > 0 && (
                <span className="absolute -top-2 -right-2.5 h-5 min-w-[20px] px-1 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Desktop Auth State */}
            <div className="md:flex hidden gap-3 items-center">
              {user ? (
                <Link
                  to="/profile"
                  className="flex items-center gap-2 bg-orange-100 hover:bg-orange-200 text-coffee-brown px-3 py-1.5 rounded-2xl transition-colors font-medium text-sm"
                >
                  <div className="w-7 h-7 rounded-full bg-coffee-orange text-white font-bold flex items-center justify-center overflow-hidden">
                    {user.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      user.name?.[0]?.toUpperCase() || <FiUser size={14} />
                    )}
                  </div>
                  <span>{user.name || "Profile"}</span>
                </Link>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="bg-coffee-orange px-4 py-2 rounded-2xl text-white font-medium hover:bg-coffee-brown transition-colors text-sm"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 border border-coffee-orange rounded-2xl text-coffee-orange font-medium hover:bg-coffee-orange hover:text-white transition-colors text-sm"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center text-coffee-brown cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-coffee-cream border-t border-coffee-orange/20 shadow-lg">
          <nav className="flex flex-col gap-3 p-4">
            <NavLink
              to="/"
              end
              className={linkclass}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/Menu"
              className={linkclass}
              onClick={() => setOpen(false)}
            >
              Menu
            </NavLink>
            <button
              onClick={() => handleSectionClick("about")}
              className="text-left text-gray-700 hover:text-coffee-orange font-medium transition-colors cursor-pointer py-1"
            >
              About
            </button>
            <button
              onClick={() => handleSectionClick("contact")}
              className="text-left text-gray-700 hover:text-coffee-orange font-medium transition-colors cursor-pointer py-1"
            >
              Contact
            </button>

            <hr className="border-coffee-orange/20 my-1" />

            {user ? (
              <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl bg-orange-100/60 border border-coffee-orange/20"
              >
                <div className="w-10 h-10 rounded-full bg-coffee-orange text-white font-bold flex items-center justify-center overflow-hidden shrink-0">
                  {user.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    user.name?.[0]?.toUpperCase() || <FiUser />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-coffee-brown leading-tight">
                    {user.name || "My Profile"}
                  </span>
                  <span className="text-xs text-coffee-orange underline font-medium">
                    View Profile
                  </span>
                </div>
              </Link>
            ) : (
              <div className="flex flex-col gap-2 pt-1">
                <Link
                  to="/signin"
                  onClick={() => setOpen(false)}
                  className="w-full bg-coffee-orange text-center py-2.5 rounded-2xl text-white font-medium hover:bg-coffee-brown transition-colors text-sm"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-2.5 border border-coffee-orange rounded-2xl text-coffee-orange font-medium hover:bg-coffee-orange hover:text-white transition-colors text-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;