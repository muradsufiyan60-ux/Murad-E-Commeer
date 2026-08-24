import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-coffee-brown p-4 text-white">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-3">
        {/* Brand Info */}
        <div>
          <h3 className="font-semibold text-lg">
            ☕<span className="text-coffee-orange"> Murad</span> Coffee Shop
          </h3>
          <p className="mt-3 text-white/80">
            Fresh coffee, snacks, and simple online ordering experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-white/80">
            <li>
              <Link to="/Menu" className="hover:text-coffee-orange transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-coffee-orange transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-coffee-orange transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/Cart" className="hover:text-coffee-orange transition-colors">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-2 space-y-2 text-white/80">
            <li>🪐 Ethiopia, Maya City</li>
            <li>📞 +251960405019</li>
            <li>📧 muradsufiyan60@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-6 border-t border-white/20 flex flex-col items-center">
        <p className="text-white/70 text-sm mt-4 text-center">
          © {new Date().getFullYear()} Murad Coffee. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;