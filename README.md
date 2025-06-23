# 🏨 QuickStay – Hotel Management App
## LIVE LINK : https://quickstay-swart.vercel.app/

**QuickStay** is a full-stack Hotel Booking application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to browse hotels, check room availability, apply filters, make bookings, and securely pay using Stripe. Hotel owners can register and manage rooms, and users receive booking confirmation via email.

---

## 🚀 Features

- 🔐 **Authentication** using [Clerk](https://clerk.dev) (including webhooks)
- 🏨 Browse & **Book hotel rooms**
- 📅 **Check availability** for specific dates
- 🧾 **Filter rooms** by amenities and price
- 💳 **Stripe Payment Integration**
- 📧 **Automated Booking Confirmation Email** via Nodemailer
- 🖼️ Image uploads handled via **Multer + Cloudinary**
- 📊 **Hotel Owner Dashboard** with revenue and booking stats
- 🔁 Loader page with redirect support
- 🎉 Toast messages with `react-hot-toast`
- 🧑 Role-based navigation (User / Owner)
- 📱 Fully **responsive UI** using **Tailwind CSS**

---

## 🧑‍💻 Tech Stack

### 🖥️ Frontend
- **React.js**
- **React Router DOM**
- **React Hooks**: `useState`, `useEffect`, `useNavigate`
- **Tailwind CSS**
- **react-hot-toast**

### 🔙 Backend
- **Node.js** & **Express.js**
- **MongoDB** (with Mongoose)
- **Stripe** for payments
- **Clerk** for authentication + webhooks
- **Nodemailer** for transactional emails
- **Cloudinary** (image hosting)
- **Multer** (file uploads)

---

## 📁 Project Structure

### `/client`
- React frontend with routing and context using `useAppContext`
- Components: Navbar, Footer, Room listing, Booking pages
- Pages: Home, All Rooms, Room Details, My Bookings
- Hotel Owner Section: Dashboard, Add Room, List Room

### `/server`
- Express backend with REST APIs
- Routes: `/api/user`, `/api/hotels`, `/api/rooms`, `/api/bookings`
- Stripe Webhook: `/api/stripe`
- Clerk Webhook: `/api/clerk`
- `server.js`: Main server config

---

## 🛡️ Security

- `.env` files for both frontend and backend are included in `.gitignore`
- Stripe Webhook secret and Clerk keys are securely handled via environment variables
- Sensitive operations (like booking confirmation, payment success) are verified via secure webhooks

---

## 📷 Screenshots

_Add screenshots or a Loom demo here if you want_

---

## ✅ Future Improvements

- Add hotel reviews and ratings
- Add admin panel
- Multi-user chat support
- Cancellation and refund logic
