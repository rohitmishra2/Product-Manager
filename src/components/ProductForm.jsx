import { useState } from "react";
import { createProduct } from "../api/productAPI";

export default function ProductForm({ onAdd }) {
  const [formData, setFormData] = useState({ name: "", price: "", image: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;
    const newProduct = await createProduct(formData);
    onAdd(newProduct);
    setFormData({ name: "", price: "", image: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-6 mb-6 w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Add Product</h2>

      <input
        name="name"
        type="text"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />

      <input
        name="price"
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
        required
      />

      <input
        name="image"
        type="text"
        placeholder="Image URL (optional)"
        value={formData.image}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
}
