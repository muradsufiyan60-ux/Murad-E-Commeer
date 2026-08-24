import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signin, error, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    const result = signin(email, password);

    if (result.success) {
      setEmail("");
      setPassword("");
      setShowPassword(false);

      // Redirect to target route (e.g. /Checkout) or fallback to Home
      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-coffee-cream to-white flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 overflow-y-auto">
      <div className="w-full max-w-sm sm:max-w-md space-y-6 sm:space-y-8 my-auto">
        <div className="text-center">
          <h1 className="font-bold text-coffee-brown text-2xl sm:text-4xl tracking-tight">
            Welcome Back ☕
          </h1>
          <p className="text-gray-600 mt-1.5 sm:mt-2 text-xs sm:text-base">
            Sign in to your account.
          </p>
        </div>

        <div className="bg-white border rounded-xl border-coffee-caramel p-5 sm:p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-coffee-brown mb-1.5">
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
              <label className="block text-xs sm:text-sm font-semibold text-coffee-brown mb-1.5">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute top-3 left-3 text-gray-400 text-base sm:text-lg" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="flex items-center gap-1.5 sm:gap-2 cursor-pointer text-gray-600 hover:text-gray-800">
                <input
                  type="checkbox"
                  className="accent-coffee-caramel w-3.5 h-3.5 sm:w-4 sm:h-4 rounded cursor-pointer"
                />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-coffee-orange hover:text-coffee-brown font-medium transition"
              >
                Forgot password?
              </Link>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-2.5 sm:p-3 rounded">
                <p className="text-red-700 text-xs sm:text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-coffee-orange py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base font-bold rounded-lg hover:bg-coffee-brown active:scale-[0.99] transition duration-200 disabled:opacity-50 shadow-md cursor-pointer"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Footer Navigation */}
          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-xs sm:text-sm">
              Don't have an account?
              <Link
                to="/signup"
                state={{ from: location.state?.from }}
                className="text-coffee-orange font-bold ml-1.5 hover:text-coffee-brown transition"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}