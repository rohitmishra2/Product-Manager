import { useState } from "react";
import { deleteProduct, updateProduct } from "../api/productAPI";
import { toast } from "react-toastify";

export default function ProductList({ products, setProducts }) {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: "", price: "", image: "" });
  const [showModal, setShowModal] = useState(false);
  const [deletingProductId, setDeletingProductId] = useState(null);

  const startEditing = (product) => {
    setEditingId(product._id);
    setEditData({
      name: product.name,
      price: product.price,
      image: product.image || "",
    });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = async (id) => {
    const updated = await updateProduct(id, editData);
    setProducts(products.map((p) => (p._id === id ? updated : p)));
    setEditingId(null);
    toast.success("Product updated!");
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded shadow-md relative"
          >
            {editingId === product._id ? (
              <>
                <input
                  name="name"
                  value={editData.name}
                  onChange={handleEditChange}
                  className="w-full border p-1 mb-2 rounded"
                />
                <input
                  name="price"
                  type="number"
                  value={editData.price}
                  onChange={handleEditChange}
                  className="w-full border p-1 mb-2 rounded"
                />
                <input
                  name="image"
                  value={editData.image}
                  onChange={handleEditChange}
                  className="w-full border p-1 mb-2 rounded"
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => saveEdit(product._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-400 text-white px-3 py-1 rounded text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-700 mb-2">₹ {product.price}</p>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                )}
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => startEditing(product)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setDeletingProductId(product._id);
                    }}
                    className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded shadow-lg p-6 w-full max-w-sm">
      <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
      <p className="text-gray-700 mb-6">Are you sure you want to delete this product?</p>
      <div className="flex justify-end gap-4">
        <button
          onClick={() => {
            setShowModal(false);
            setDeletingProductId(null);
          }}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={async () => {
            await deleteProduct(deletingProductId);
            setProducts(products.filter(p => p._id !== deletingProductId));
            toast.success("Product deleted!");
            setShowModal(false);
            setDeletingProductId(null);
          }}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
