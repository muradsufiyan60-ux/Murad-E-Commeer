import React, { useState } from 'react';
import { useCart } from "../context/Cartcontext";
import { useAuth } from "../context/Authcontext";
import { FiMapPin, FiMail, FiPhone, FiLoader, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Checkout() {
  const { cartItems = [], clearCart } = useCart();
  const { user } = useAuth() || {};

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    address: user?.address || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Success Screen
  if (orderPlaced) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center min-h-screen flex flex-col justify-center items-center">
        <FiCheckCircle size={72} className="mx-auto text-green-500 mb-4" />
        <h2 className="text-3xl font-bold text-coffee-orange mb-2">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-800 mb-6">
          Thank you for your order. Your coffee is on the way!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center w-full">
          <Link
            to="/menu"
            className="px-6 py-3 bg-coffee-orange text-white font-bold rounded-xl hover:bg-coffee-brown transition-colors"
          >
            Order More
          </Link>
          <Link
            to="/"
            className="px-6 py-3 border border-coffee-orange text-coffee-orange font-bold rounded-xl hover:bg-coffee-orange hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Empty Cart Guard
  if (cartItems.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-coffee-brown mb-4">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-6">
          Add some items to your cart before checking out.
        </p>
        <Link
          to="/menu"
          className="px-6 py-3 bg-coffee-orange text-white font-bold rounded-xl hover:bg-coffee-brown transition-colors"
        >
          View Menu
        </Link>
      </div>
    );
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 50 ? 0 : 5.00;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
  }

  function validateForm() {
    if (!formData.address.trim()) {
      return "Shipping Address is required";
    }
    if (!formData.email.trim()) {
      return "Email is required";
    }
    if (!formData.phone.trim()) {
      return "Phone number is required";
    }
    return "";
  }

  function handlePlaceOrder() {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      clearCart();
      setOrderPlaced(true);

      setFormData({
        address: "",
        email: "",
        phone: "",
      });
    }, 2000);
  }

  return (
    <div className="bg-linear-to-b from-coffee-cream to-white py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <h1 className="text-4xl font-bold text-coffee-orange">Checkout</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Order Items */}
            <div>
              <h2 className="text-2xl font-bold text-coffee-brown mb-4">
                Order Items
              </h2>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="flex justify-between items-center gap-4 border-b pb-3 border-gray-300"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      )}
                      <div>
                        <p className="font-semibold text-coffee-brown">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="font-bold text-coffee-brown">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Form */}
            <div className="bg-white rounded-xl border border-coffee-orange/30 shadow-sm p-6">
              <h2 className="text-2xl text-coffee-brown flex items-center gap-2 mb-4 font-semibold">
                <FiMapPin /> Shipping Details
              </h2>

              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm font-semibold">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-coffee-brown mb-2">
                    Shipping Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main Street, City, State 12345"
                    rows={3}
                    className="text-sm border border-coffee-caramel px-4 py-2 rounded-lg focus:outline-none focus:border-coffee-orange w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-coffee-brown flex items-center gap-2 mb-2">
                    <FiMail /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@example.com"
                    className="w-full border border-coffee-caramel px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-coffee-orange"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-coffee-brown flex items-center gap-2 mb-2">
                    <FiPhone /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(+123) 456-7890"
                    className="w-full border border-coffee-caramel px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-coffee-orange"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div>
            <div className="bg-white border border-coffee-orange/30 rounded-xl p-6 sticky top-20 shadow-sm">
              <h2 className="text-2xl text-coffee-brown font-semibold mb-4">
                Order Summary
              </h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 text-lg font-bold border-t border-gray-300 pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full py-3 bg-green-600 font-bold hover:bg-green-700 text-white rounded-xl flex justify-center items-center gap-2 disabled:opacity-50 cursor-pointer transition-colors"
              >
                {loading ? (
                  <>
                    <FiLoader className="animate-spin" />
                    Placing Order...
                  </>
                ) : (
                  "Place Order"
                )}
              </button>

              <Link
                to="/menu"
                className="block text-center mt-3 text-coffee-orange border border-coffee-orange p-3 rounded-xl hover:bg-coffee-orange hover:text-white font-bold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;