import { Link } from "react-router-dom";
import {
  FaStore,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaStore className="text-3xl text-blue-500" />
              <h3 className="text-2xl font-bold text-white">BuyNow</h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              BuyNow is your trusted online shopping platform offering quality
              products, secure payments, and fast delivery across India.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
                <FaFacebookF className="text-white text-sm" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
                <FaInstagram className="text-white text-sm" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition">
                <FaTwitter className="text-white text-sm" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition">
                <FaLinkedinIn className="text-white text-sm" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
              <li><Link to="/account" className="hover:text-white">My Account</Link></li>
              <li><Link to="/orders" className="hover:text-white">Orders</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/returns" className="hover:text-white">Returns</Link></li>
              <li><Link to="/shipping" className="hover:text-white">Shipping</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>

            <ul className="space-y-3 text-sm mb-5">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <span>Dindigul, Tamil Nadu, India</span>
              </li>
              <li className="flex gap-3">
                <FaPhone className="text-blue-500" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex gap-3">
                <FaEnvelope className="text-blue-500" />
                <span>buynow@gmail.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <p className="text-sm text-gray-400 mb-2">
              Subscribe for offers & updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 text-white text-sm rounded-l outline-none"
              />
              <button className="px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-r transition">
                Join
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-center items-center gap-3 text-sm">
          <p className="text-gray-400">
            © 2026 BuyNow. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
