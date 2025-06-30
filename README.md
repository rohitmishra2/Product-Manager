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
