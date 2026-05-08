# 🛒 Moonlight E-Commerce Shop

A modern, fully functional E-Commerce web application built using **React.js**, **Vite**, and **Tailwind CSS**. This project demonstrates the integration of REST APIs, state management using Context API, and a clean, responsive user interface.

---

## 🚀 Features

* **Dynamic Product Listing:** Fetches real-time product data from the [Fake Store API](https://fakestoreapi.com/).
* **Live Search Functionality:** Real-time filtering of products based on user input.
* **Stateful Shopping Cart:** Users can add/remove items and see the total count and price updated instantly across the site.
* **Admin Panel UI:** A dedicated section to simulate adding new products to the inventory.
* **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.
* **Client-Side Routing:** Seamless navigation between Home, Cart, and Admin pages using `react-router-dom`.

---

## 🛠️ Tech Stack

* **Frontend Library:** React.js (Hooks, Context API)
* **Build Tool:** Vite (for ultra-fast development)
* **Styling:** Tailwind CSS & Custom CSS Modules
* **HTTP Client:** Axios (for API requests)
* **Routing:** React Router v6

---

## 📦 Project Structure

```text
src/
 ┣ components/     # Reusable UI components (Navbar, etc.)
 ┣ context/        # CartContext for global state management
 ┣ pages/          # Home, Cart, and AddProduct page components
 ┣ App.jsx         # Main application logic and routing
 ┗ main.jsx        # Entry point