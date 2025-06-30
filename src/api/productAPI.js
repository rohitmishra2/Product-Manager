
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


export const getAllProducts = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
};

export const createProduct = async (product) => {
  const res = await axios.post(API_BASE_URL, product);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await axios.delete(`${API_BASE_URL}/${id}`);
  return res.data;
};

export const updateProduct = async (id, updatedData) => {
  const res = await axios.put(`${API_BASE_URL}/${id}`, updatedData);
  return res.data;
};

