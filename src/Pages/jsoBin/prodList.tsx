import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaShoppingBag } from "react-icons/fa";

const JSON_BIN_ID = "67e7bbcb8561e97a50f50d3c";
const API_KEY = "$2a$10$M/z2e.cKX1SUsOT62D4pk.gbhiuJhRx0u3VzNAe.DsTPIHHAQE6Zu";
const BASE_URL = `https://api.jsonbin.io/v3/b/${JSON_BIN_ID}`;

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  originalPrice : number;
  isOnSale?: boolean;
  sizes?: string[];
  colors?: string[];
}

const ShopList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch products from JSONBin
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL, {
        headers: { "X-Master-Key": API_KEY },
      });
      const fetchedProducts = response.data.record.products || [];
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search functionality
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Our Collections</h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={handleSearch}
          className="border px-4 py-2 w-2/3 rounded-l-md focus:outline-none"
        />
        <button className="bg-black text-white px-4 py-2 rounded-r-md">
          Search
        </button>
      </div>

      {/* Product List */}
      {loading ? (
        // Skeleton Loaders
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border p-4 shadow-md rounded-lg animate-pulse">
              <div className="bg-gray-300 h-48 w-full mb-4"></div>
              <div className="h-4 bg-gray-300 w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
              <div className="h-10 bg-gray-300 w-full"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="group w-[400px] overflow-hidden m-auto rounded-lg border border-gray-200 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative p-4 ">

{product.isOnSale && (
                <div className="absolute top-6 right-4 bg-red-500 text-white text-xs font-bold px-4 py-2 ">
                  On Sale
                </div>
              )}

              {/* Product Image */}
              {product.images.length > 0 && (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}


<div className="p-4">
                <h3 className="font-thin text-lg">{product.name}</h3>
            
                {/* Display price with slash if on sale */}
                <p className="font-semibold  text-red-500 text-lg mt-2">
                  ₦{product.price}
                  {product.originalPrice && (
                    <span className="line-through text-gray-500 ml-2">₦{product.originalPrice}</span>
                  )}
                </p>
              </div>
<hr />
              {/* Product Details Button */}
              {/* Centered Product Details Button */}
<div className="flex justify-center mt-4">
  <Link to={`/products/${product.id}`}>
    <button className="bg-[#2e4156]  flex gap-2 text-[#d4d8dd]  px-6 py-2 hover:bg-[#aab7b7] hover:text-black transition">
      <FaShoppingBag/>
      <p>View Product</p>
    </button>
  </Link>
</div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopList;
