import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaInstagram, FaRegStar, FaStar, FaWhatsapp } from "react-icons/fa";
import FeaturedProduct from "../products/FeaturedProd";
import RelatedShop from "./related";

const JSON_BIN_ID = "67e7bbcb8561e97a50f50d3c";
const API_KEY = "$2a$10$M/z2e.cKX1SUsOT62D4pk.gbhiuJhRx0u3VzNAe.DsTPIHHAQE6Zu";
const BASE_URL = `https://api.jsonbin.io/v3/b/${JSON_BIN_ID}`;

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  isOnSale?: boolean;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL, {
        headers: { "X-Master-Key": API_KEY },
      });
      const products = response.data.record.products || [];
      const foundProduct = products.find((p: Product) => p.id === Number(id));

      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.images[0]); // Set first image as default
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRating = (index: number) => {
    setRating(index);
  };

  // WhatsApp Order Link
  const handleBuyNow = () => {
    if (product) {
      const message = `Hello, I'm interested in buying *${product.name}* for *₦${product.price.toFixed(2)}*.`;
      const whatsappUrl = `https://wa.me/2349132214390?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        {loading ? (
          <div className="border p-6 shadow-lg rounded-lg animate-pulse">
            <div className="w-full h-64 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 w-1/4 mb-4"></div>
            <div className="flex gap-2">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="w-16 h-16 bg-gray-300 rounded-md"></div>
              ))}
            </div>
          </div>
        ) : product ? (
          <div className="p-6 relative">
            {product.isOnSale && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md text-xs">
                On Sale
              </div>
            )}

            {/* Main Image */}
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />

            {/* Thumbnails */}
            <div className="flex gap-2 mb-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${
                    selectedImage === img ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            <div className="mt-6">
              <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-lg text-gray-600 mt-2">{product.description}</p>

              {/* Pricing */}
              <div className="flex items-center mt-4">
                <p className="text-xl font-bold text-gray-800">₦{product.price.toFixed(2)}</p>
                {product.isOnSale && product.originalPrice && (
                  <p className="text-sm text-red-500 line-through ml-4">
                    ₦{product.originalPrice.toFixed(2)}
                  </p>
                )}
              </div>
            </div>

            {/* Rating System */}
            <div className="mt-6 flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  onClick={() => handleRating(index)}
                  onMouseEnter={() => setHoverRating(index)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="cursor-pointer"
                >
                  {rating >= index || hoverRating >= index ? (
                    <FaStar className="text-yellow-400" />
                  ) : (
                    <FaRegStar className="text-gray-400" />
                  )}
                </div>
              ))}
            </div>

            {/* Notice */}
            <p className="text-sm text-red-600 mt-4">
              ⚠️ You can't add this product to a cart. You can only order it directly.
            </p>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-3  text-lg font-semibold hover:bg-gray-800 transition"
            >
              <FaWhatsapp size={20} /> Proceed to payment
            </button>

            {/* About Brand */}
            <div className="mt-8 border-t pt-6">
              <h2 className="text-2xl font-thin text-gray-800 text-center">About the Brand</h2>
              <p className="text-sm text-gray-800 mt-2 text-center">
                JAELS FASHION specializes in high-quality bags, shoes, jewelry, and clothes. Our mission is
                to bring elegance and style to your wardrobe at affordable prices.
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex justify-center space-x-4">
              <a href="mailto:jaelsann@gmail.com" className="text-blue-600 hover:text-blue-800">
                <FaEnvelope size={24} />
              </a>
              <a href="https://instagram.com/shopwithjaels" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        ) : (
          <p className="text-center">Product not found.</p>
        )}
      </div>

<RelatedShop/>
      {/* Featured Products */}
      {/* <FeaturedProduct /> */}
    </>
  );
};

export default ProductDetails;
