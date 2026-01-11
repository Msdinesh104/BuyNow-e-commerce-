import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaShoppingBag,
  FaSignInAlt,
  FaUserPlus,
  FaStore,
} from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItemsCount } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setIsMenuOpen(false);
    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-semibold transition-all ${
      isActive
        ? "bg-blue-600 text-white shadow"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow">
              <FaStore className="text-white" />
            </div>
            <span className="text-xl font-extrabold text-gray-900">
              BuyNow
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-3 bg-white/70 px-3 py-2 rounded-full shadow-inner">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/products" className={navClass}>Products</NavLink>

            {user && (
              <>
                <NavLink to="/cart" className="relative px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:bg-blue-100">
                  <FaShoppingCart />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartItemsCount}
                    </span>
                  )}
                </NavLink>

                <NavLink to="/account" className={navClass}>Account</NavLink>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-full bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            )}

            {!user && (
              <>
                <NavLink to="/login" className={navClass}>Login</NavLink>
                <NavLink
                  to="/register"
                  className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 rounded-lg bg-blue-600 text-white"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* MOBILE BOTTOM SHEET */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Menu</h3>
            <button onClick={() => setIsMenuOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block py-3 font-semibold">Home</NavLink>
          <NavLink to="/products" onClick={() => setIsMenuOpen(false)} className="block py-3 font-semibold">Products</NavLink>

          {user && (
            <>
              <NavLink to="/cart" onClick={() => setIsMenuOpen(false)} className="block py-3 font-semibold">
                Cart ({cartItemsCount})
              </NavLink>
              <NavLink to="/account" onClick={() => setIsMenuOpen(false)} className="block py-3 font-semibold">
                Account
              </NavLink>

              <button
                onClick={handleLogout}
                className="w-full mt-3 bg-red-500 text-white py-3 rounded-xl font-semibold"
              >
                Logout
              </button>
            </>
          )}

          {!user && (
            <>
              <NavLink to="/login" onClick={() => setIsMenuOpen(false)} className="block py-3 font-semibold">
                Login
              </NavLink>
              <NavLink
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-center bg-blue-600 text-white rounded-xl font-semibold"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
