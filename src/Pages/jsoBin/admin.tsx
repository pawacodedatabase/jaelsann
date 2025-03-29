import React, { useState, useEffect } from "react";
import axios from "axios";

const JSON_BIN_ID = "67e7bbcb8561e97a50f50d3c";
const API_KEY = "$2a$10$M/z2e.cKX1SUsOT62D4pk.gbhiuJhRx0u3VzNAe.DsTPIHHAQE6Zu";
const BASE_URL = `https://api.jsonbin.io/v3/b/${JSON_BIN_ID}`;

const CLOUDINARY_UPLOAD_PRESET =  `jaelsann`;
const CLOUDINARY_CLOUD_NAME = "dx90y9zdx";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

interface Product {
  id: number;
  name: string;
  category: string;
  subCategories: string[];
  price: number;
  originalPrice?: number;
  isOnSale?: boolean;
  description: string;
  images: string[];
  sizes?: string[];
  colors?: string[];
}

const Admin: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({});
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL, {
        headers: { "X-Master-Key": API_KEY },
      });
      setProducts(response.data.record.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Upload image to Cloudinary
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, formData);
      const imageUrl = response.data.secure_url;

      setNewProduct((prev) => ({
        ...prev,
        images: [...(prev.images || []), imageUrl],
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Delete an image
  const handleDeleteImage = (imageUrl: string) => {
    setNewProduct((prev) => ({
      ...prev,
      images: prev.images?.filter((img) => img !== imageUrl) || [],
    }));
  };

  // Add or update a product
  const handleAddOrUpdateProduct = async () => {
    if (!newProduct.name || !newProduct.price) {
      return alert("Name and Price are required");
    }

    let updatedProducts: Product[];

    if (editingProduct) {
      updatedProducts = products.map((product) =>
        product.id === editingProduct!.id
          ? { ...product, ...newProduct, id: product.id }
          : product
      );
    } else {
      const newProductData: Product = {
        id: Date.now(),
        name: newProduct.name!,
        category: newProduct.category || "Uncategorized",
        subCategories: newProduct.subCategories || [],
        price: newProduct.price!,
        originalPrice: newProduct.originalPrice || newProduct.price!,
        isOnSale: newProduct.isOnSale || false,
        description: newProduct.description || "No description available",
        images: newProduct.images || [],
        sizes: newProduct.sizes || [],
        colors: newProduct.colors || [],
      };

      updatedProducts = [...products, newProductData];
    }

    try {
      await axios.put(BASE_URL, { products: updatedProducts }, {
        headers: { "X-Master-Key": API_KEY },
      });
      setProducts(updatedProducts);
      setNewProduct({});
      setEditingProduct(null);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  // Set product for editing
  const handleEditProduct = (product: Product) => {
    setNewProduct(product);
    setEditingProduct(product);
  };

  // Delete a product
  const handleDeleteProduct = async (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);

    try {
      await axios.put(BASE_URL, { products: updatedProducts }, {
        headers: { "X-Master-Key": API_KEY },
      });
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-4">Admin Panel</h2>

      <div className="mb-4">
        <label>Product Name</label>
        <input
          type="text"
          className="border p-2 w-full mb-2"
          value={newProduct.name || ""}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />

        <label>Category</label>
        <input
          type="text"
          className="border p-2 w-full mb-2"
          value={newProduct.category || ""}
          placeholder="i.e Accessories, Shoes , Clothes"
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />

        <label>Subcategories (comma-separated)</label>
        <input
          type="text"
          className="border p-2 w-full mb-2"
          placeholder="i.e Male, Female , Unisex"
          value={newProduct.subCategories?.join(", ") || ""}
          onChange={(e) => setNewProduct({ ...newProduct, subCategories: e.target.value.split(", ") })}
        />

        <label>Price</label>
        <input
          type="number"
          className="border p-2 w-full mb-2"
          value={newProduct.price || ""}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
        />

        <label>On  sale Price</label>
        <p className="text-sm p-2 text-red-500">*leave blank if product is not on sale</p>
        <input
          type="number"
          className="border p-2 w-full mb-2"
          value={newProduct.originalPrice || ""}
          onChange={(e) => setNewProduct({ ...newProduct, originalPrice: parseFloat(e.target.value) })}
        />

        <label>Is Product On Sale?</label>
        <input
          type="checkbox"
          className="mb-2  w-8"
          checked={newProduct.isOnSale || false}
          onChange={(e) => setNewProduct({ ...newProduct, isOnSale: e.target.checked })}
        />

<br />
<br />
        <label>Description</label>
        <textarea
          className="border p-2 w-full mb-2"
          value={newProduct.description || ""}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />

        <label>Images</label>
        <input type="file" onChange={handleImageUpload} className="border p-2 w-full mb-2" />

        <div className="flex flex-wrap gap-2">
          {newProduct.images?.map((img, index) => (
            <div key={index} className="relative">
              <img src={img} alt="Product" className="w-20 h-20 object-cover rounded" />
              <button className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded"
                onClick={() => handleDeleteImage(img)}>✕</button>
            </div>
          ))}
        </div>

        <button onClick={handleAddOrUpdateProduct} className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
            <p className="text-xl text-center font-thin m-5">Available products </p>
          {products.map((product) => (
            <li key={product.id} className="border p-2 flex justify-between">
              <span>{product.name} - N{product.price}</span>
              <div>
                <button onClick={() => handleEditProduct(product)} className="text-blue-500 mr-2">
                  Edit
                </button>
                <button onClick={() => handleDeleteProduct(product.id)} className="text-red-500">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Admin;
