college-booking-app/
client/
├── components/ # Reusable UI components
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── CollegeCard.jsx
│ ├── ReviewCard.jsx
│ └── SearchBar.jsx
│
├── public/ # Static files (images, icons, etc.)
│ └── images/
│ └── colleges/
│
├── src/
│ ├── app/ # Next.js App Router Pages
│ │ ├── layout.js # Root layout (includes Navbar/Footer)
│ │ ├── page.js # Home Page
│ │ ├── colleges/
│ │ │ ├── page.js # Colleges listing
│ │ │ └── [id]/page.js # College details
│ │ ├── admission/
│ │ │ └── page.js # Admission form
│ │ ├── my-college/
│ │ │ └── page.js # My college info
│ │ ├── profile/
│ │ │ ├── page.js # Profile view
│ │ │ └── edit/page.js # Profile edit
│ │ ├── login/page.js # Login page
│ │ ├── register/page.js # Register page
│ │ ├── reset-password/page.js
│ │ └── not-found.js # 404 page
│ │
│ ├── context/ # React context (e.g., AuthContext)
│ │ └── AuthContext.jsx
│ │
│ ├── hooks/ # Custom hooks
│ │ └── useAuth.js
│ │
│ ├── utils/ # Utility functions
│ │ └── api.js
│ │
│ └── styles/ # CSS files
│ ├── globals.css # Global styles
│ └── custom.css # Custom styles (optional)
│
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.js
├── package.json
└── README.md

├── server/ (Backend - Express.js)
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── collegeController.js
│ │ ├── admissionController.js
│ │ ├── userController.js
│ │ └── reviewController.js
│ ├── models/
│ │ ├── College.js
│ │ ├── User.js
│ │ ├── Admission.js
│ │ └── Review.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── collegeRoutes.js
│ │ ├── admissionRoutes.js
│ │ ├── userRoutes.js
│ │ └── reviewRoutes.js
│ ├── middlewares/
│ │ └── authMiddleware.js
│ ├── config/
│ │ └── db.js
│ ├── .env
│ ├── server.js
│
├── README.md
├── .gitignore
└── package.json (for root monorepo if needed)
