import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationError, setValidationError] = useState("");

  const { signup, loading, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    setValidationError("");

    if (password !== confirmPassword) {
      setValidationError("Passwords do not match");
      return;
    }

    const result = signup(email, password, name);

    if (result.success) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setShowPassword(false);
      setShowConfirmPassword(false);

      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    }
  }

  const displayError = validationError || error;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-coffee-cream to-white flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 overflow-y-auto">
      <div className="w-full max-w-sm sm:max-w-md space-y-6 my-auto">
        <div className="text-center">
          <h1 className="font-bold text-coffee-brown text-2xl sm:text-4xl tracking-tight">
            Create Account ☕
          </h1>
          <p className="text-gray-600 mt-1.5 sm:mt-2 text-xs sm:text-base">
            Join us for a great coffee experience.
          </p>
        </div>

        <div className="bg-white border rounded-xl border-coffee-caramel p-5 sm:p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            {/* Full Name Field */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-coffee-brown mb-1 sm:mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <FiUser className="absolute top-3 left-3 text-gray-400 text-base sm:text-lg" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="pl-9 sm:pl-10 pr-4 border border-coffee-caramel w-full py-2 sm:py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coffee-caramel rounded-lg transition"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-coffee-brown mb-1 sm:mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute top-3 left-3 text-gray-400 text-base sm:text-lg" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@example.com"
                  className="pl-9 sm:pl-10 pr-4 border border-coffee-caramel w-full py-2 sm:py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coffee-caramel rounded-lg transition"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-coffee-brown mb-1 sm:mb-1.5">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute top-3 left-3 text-gray-400 text-base sm:text-lg" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="pl-9 sm:pl-10 pr-10 border border-coffee-caramel w-full py-2 sm:py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coffee-caramel rounded-lg transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-coffee-brown transition cursor-pointer"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-coffee-brown mb-1 sm:mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <FiLock className="absolute top-3 left-3 text-gray-400 text-base sm:text-lg" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="pl-9 sm:pl-10 pr-10 border border-coffee-caramel w-full py-2 sm:py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coffee-caramel rounded-lg transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-coffee-brown transition cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <FiEyeOff size={18} />
                  ) : (
                    <FiEye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center text-xs sm:text-sm pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-800">
                <input
                  type="checkbox"
                  required
                  className="accent-coffee-caramel w-3.5 h-3.5 sm:w-4 sm:h-4 rounded cursor-pointer"
                />
                I agree to the Terms & Conditions
              </label>
            </div>

            {displayError && (
              <div className="bg-red-50 border-l-4 border-red-500 p-2.5 sm:p-3 rounded">
                <p className="text-red-700 text-xs sm:text-sm">
                  {displayError}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-coffee-orange py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base font-bold rounded-lg hover:bg-coffee-brown active:scale-[0.99] transition duration-200 disabled:opacity-50 shadow-md mt-1 sm:mt-2 cursor-pointer"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {/* Footer Navigation */}
          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-xs sm:text-sm">
              Already have an account?
              <Link
                to="/signin"
                state={{ from: location.state?.from }}
                className="text-coffee-orange font-bold ml-1.5 hover:text-coffee-brown transition"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}