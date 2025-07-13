# 🎓 College Booking Web Application

A full-featured **MERN Stack** web application built with **Next.js**, allowing users to explore colleges, book admissions, submit reviews, and manage their profile — all in a user-friendly, responsive interface.

---

## 🚀 Live Demo

🌐 [Visit Website](https://edu-soft-roan.vercel.app)

---

## 📌 Features

### 🏠 Home Page

- Navbar with links: `Home`, `Colleges`, `Admission`, `My College`
- 🔍 College Search Bar (search by college name)
- 🎓 Featured Colleges (3 cards with image, admission date, events, research, sports, and details button)
- 🖼️ College Gallery Section (graduation group images)
- 📄 Research Paper Links Section
- ⭐ Reviews Section from users

---

### 🏫 College Route (`/colleges`)

- Display of 5–6 college cards
- Card Info: Image, Name, Rating, Admission Date, Research Count
- `Details` Button → Full College Page (with images, admission process, events, research, sports)

---

### 📝 Admission Route (`/admission`)

- List of college names
- On selecting one → Admission Form:
  - Candidate Name
  - Subject
  - Email
  - Phone Number
  - Address
  - Date of Birth
  - Profile Image Upload
- 🎯 Submit → Data stored and shown in `My College`

---

### 🎓 My College Route (`/my-college`)

- Shows the candidate's submitted admission data
- ⭐ Add Review (with rating input)
- User-added reviews shown on homepage review section

---

### 👤 Authentication & Profile

- ✅ Email/password registration & login
- 🔐 Google & Social Login (e.g., GitHub)
- 🔁 Password reset functionality
- 🧍 Authenticated users can:
  - View full college details
  - Submit reviews
  - Access profile route `/profile`
- ✏️ Profile route allows editing:
  - Name, Email, University, Address

---

### ❌ 404 Page

- Beautiful, animated custom `404 - Page Not Found` screen

---

## 🛠️ Tech Stack

| Frontend             | Backend             | Styling            | Authentication              | Deployment                  |
| -------------------- | ------------------- | ------------------ | --------------------------- | --------------------------- |
| Next.js (App Router) | Node.js, Express.js | Tailwind CSS       | Firebase Auth, Google OAuth | Vercel                      |
| React.js             | MongoDB (Mongoose)  | DaisyUI (optional) | Firebase & JWT              | Netlify/Firebase (optional) |

---

## ⚙️ Installation & Run Locally

```bash
# Clone the repository
git clone https://github.com/Walid-3105/eduSoft
cd eduSoft

# Install dependencies
npm install

# Create a .env file and add:
# NEXT_PUBLIC_FIREBASE_API_KEY=your_key
# MONGODB_URI=your_mongo_url
# NEXTAUTH_SECRET=...

# Run development server
npm run dev
```
