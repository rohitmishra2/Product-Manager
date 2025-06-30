import { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { getAllProducts } from "./api/productAPI";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Product Manager</h1>
      <ProductForm onAdd={handleAddProduct} />
      <ProductList products={products} setProducts={setProducts} />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
