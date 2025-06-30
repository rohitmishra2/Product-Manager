# 🛍️ Personalised Product Manager

A full-stack MERN app to manage products — built with **React**, **Node.js**, **Express**, **MongoDB**, and deployed using **Netlify** & **Render**.

> 🔗 Live Demo: [View Website](https://smartmanage.netlify.app/)  
> 🔗 Backend API: [View Render API](https://product-manager-backend-c0g7.onrender.com/api/products)

---

## 🚀 Features

- Add new products (name, price, image)
- View all products in a responsive grid
- Edit product details inline
- Delete products with confirmation modal
- Beautiful UI built with **Tailwind CSS**
- Toast notifications for instant feedback
- Environment variable support for clean deployments

---

## 🧑‍💻 Technologies Used

| Frontend       | Backend        | Deployment     |
|----------------|----------------|----------------|
| React.js       | Express.js     | Netlify (FE)   |
| Tailwind CSS   | Node.js        | Render (BE)    |
| Axios          | MongoDB Atlas  | Git + GitHub   |
| React Toastify | Mongoose       |                |

---

## 📁 Folder Structure

```bash
product-manager/
├── product-manager-frontend/
│   ├── src/
│   │   ├── components/        # ProductForm & ProductList
│   │   ├── api/               # Axios API service
│   │   └── App.js             # Main component
├── product-manager-backend/
│   ├── routes/                # Express routes
│   ├── models/                # Mongoose model
│   └── index.js               # Entry point


## ⚙️ Setup Locally

### 🔧 Backend

```bash
cd product-manager-backend
npm install
# Create .env file
PORT=5000
MONGO_URI=your_mongo_db_url
npm run dev

### 🔧 Frontend

```bash
cd product-manager-frontend
npm install
# Create .env file
REACT_APP_API_BASE_URL=http://localhost:5000/api/products
npm start

ℹ️ Be sure to replace your_mongo_db_url with your own MongoDB URI in .env when running locally.

