import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // ✅ Import ref
import { storage } from "../services/firebase"; // ✅ Import storage
import api from "../services/api";

const AdminDashboard = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddProduct = async () => {
    if (!name || !price || !image || !category) {
      alert("All fields required");
      return;
    }

    try {
      setLoading(true);

      // Upload image to Firebase Storage
      const imageRef = ref(storage, `products/${Date.now()}-${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Save product to backend
      await api.post("/products", {
        name,
        price: Number(price),
        description,
        imageUrl,
        category,
      });

      alert("Product added successfully");

      // Reset form
      setName("");
      setPrice("");
      setDescription("");
      setCategory("");
      setImage(null);
    } catch (error) {
      console.error("Upload error:", error);
      alert(error.response?.data?.message || "Product upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 mb-3 rounded"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border p-3 mb-3 rounded"
      />

      <input
        type="text"
        placeholder="Category (e.g., Electronics, Clothing)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border p-3 mb-3 rounded"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-3 mb-3 rounded"
        rows="4"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={handleAddProduct}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Uploading..." : "Add Product"}
      </button>
    </div>
  );
};

export default AdminDashboard;