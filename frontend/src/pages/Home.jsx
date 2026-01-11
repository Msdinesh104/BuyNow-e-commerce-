// FILE: frontend/src/pages/Home.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const [showOffer, setShowOffer] = useState(true);

  useEffect(() => {
    const closed = sessionStorage.getItem("offerClosed");
    if (closed === "true") {
      setShowOffer(false);
    }
  }, []);

  const closeOffer = () => {
    setShowOffer(false);
    sessionStorage.setItem("offerClosed", "true");
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔥 OFFER BANNER */}
      {showOffer && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 relative">
          <p className="text-center text-sm md:text-base font-semibold">
            🎉 <span className="text-yellow-300">Flat 35% OFF</span> for First 30 Customers — Limited Time!
          </p>

          <button
            onClick={closeOffer}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold hover:text-yellow-300 transition"
          >
            ×
          </button>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
          Welcome to <span className="text-blue-700">Bazario</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Premium products. Trusted quality. Simple shopping experience.
        </p>

        <Link
          to="/products"
          className="inline-block bg-blue-800 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
        >
          Explore Products →
        </Link>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "💻", title: "Electronics" },
            { icon: "🧥", title: "Fashion" },
            { icon: "🏠", title: "Home & Living" },
          ].map((cat) => (
            <Link
              key={cat.title}
              to="/products"
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-8 text-center"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800">
                {cat.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Why Shop With Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "🚚", title: "Free Shipping" },
              { icon: "🔒", title: "Secure Payment" },
              { icon: "↩️", title: "Easy Returns" },
              { icon: "⭐", title: "Top Quality" },
            ].map((item) => (
              <div key={item.title} className="p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-blue-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
          Ready to Start Shopping?
        </h2>

        <Link
          to="/products"
          className="inline-block bg-blue-800 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
        >
          Browse All Products →
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
