import React, { useState, useEffect } from 'react';
import { products } from './product'; // Import products
import { FaTrash, FaShoppingCart, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface WishlistItem {
  productId: number;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const handleRemoveFromWishlist = (productId: number) => {
    const updatedWishlist = wishlist.filter(item => item.productId !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white py-6 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Your Wishlist
          </h1>
          <p className="text-gray-600 mt-2">
            Explore your favorite products, curated by you.
          </p>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Wishlist Items */}
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-16">
           
            <p className="text-lg text-gray-600">Your wishlist is currently empty.</p>
            <Link
              to="/shop"
              className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map(item => {
              const product = products.find(product => product.id === item.productId);
              return product ? (
                <div
                  key={item.productId}
                  className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold text-gray-800 truncate">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mt-1">₦{product.price.toFixed(2)}</p>
                    <div className="flex items-center justify-between mt-4">
                      {/* Add to Cart */}
                      <button
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition duration-300"
                        onClick={() => {
                          // Logic to add the product to cart
                          alert(`${product.name} added to cart!`);
                        }}
                      >
                        <FaShoppingCart /> Add to Cart
                      </button>
                      {/* Remove from Wishlist */}
                      <button
                        className="text-red-500 hover:text-red-700 transition duration-300"
                        onClick={() => handleRemoveFromWishlist(item.productId)}
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        )}
      </div>

      {/* About the Brand Section */}
      <section className="bg-white py-10 mt-10">
        <div className="container mx-aut-center">
          <h2 className="text-xl font-bold text-gray-800 text-center">About JAELS FASHION</h2>
          <p className="text-gray-600 mt-4 max-to text-sm text-center p-9 mx-auto">
            At JAELS FASHION, we provide the best in class fashion accessories, offering a wide
            range of bags, shoes, jewelry, and clothing for every occasion. We believe in
            elegance, quality, and customer satisfaction.
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-blue-600 text-3xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 text-3xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 text-3xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
