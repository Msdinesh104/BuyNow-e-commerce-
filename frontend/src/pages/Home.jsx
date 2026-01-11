// FILE: frontend/src/pages/Home.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const [showOffer, setShowOffer] = useState(true);

  useEffect(() => {
    const closed = sessionStorage.getItem("offerClosed");
    if (closed === "true") setShowOffer(false);
  }, []);

  const closeOffer = () => {
    setShowOffer(false);
    sessionStorage.setItem("offerClosed", "true");
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen">

      {/* ✨ GLASS OFFER BANNER */}
      {showOffer && (
        <div className="backdrop-blur bg-white/10 border-b border-white/10 py-3 relative">
          <p className="text-center text-sm md:text-base font-semibold">
            🚀 <span className="text-yellow-400">35% OFF</span> for first 30 customers — Don’t miss out!
          </p>
          <button
            onClick={closeOffer}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl hover:text-red-400 transition"
          >
            ×
          </button>
        </div>
      )}

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Shop Smarter with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              BuyNow
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Discover premium products, unbeatable prices, and seamless checkout —
            all in one place.
          </p>

          <div className="flex gap-4">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-indigo-500/30 rounded-3xl blur-2xl" />
          <div className="relative bg-gray-900 rounded-3xl p-10 text-center shadow-xl">
            <p className="text-7xl mb-4">🛍️</p>
            <h3 className="text-xl font-semibold">Premium Shopping</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Secure • Fast • Reliable
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-14">
          Browse Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "💻", title: "Electronics" },
            { icon: "🧥", title: "Fashion" },
            { icon: "🏠", title: "Home & Living" },
          ].map((cat) => (
            <Link
              key={cat.title}
              to="/products"
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center hover:border-blue-500 transition"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition">
                {cat.icon}
              </div>
              <h3 className="text-xl font-semibold">{cat.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why Choose BuyNow?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            {[
              { icon: "🚚", title: "Fast Delivery" },
              { icon: "🔐", title: "Secure Payments" },
              { icon: "↩️", title: "Easy Returns" },
              { icon: "⭐", title: "Top Quality" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Start Your Shopping Journey Today
        </h2>

        <Link
          to="/products"
          className="inline-block mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 px-14 py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Explore Products →
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
