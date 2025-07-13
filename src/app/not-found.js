"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-100 text-gray-800 px-4">
      <div className="text-8xl mb-4 animate-bounce">😢</div>
      <h1 className="text-5xl font-extrabold mb-3 text-blue-700">
        404 - Not Found
      </h1>
      <p className="text-lg text-center max-w-md mb-6">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className=" text-black border border-gray-400 px-6 py-3 rounded-lg shadow hover:bg-blue-400 transition duration-300"
      >
        ⬅ Go back to Home
      </Link>
    </div>
  );
}
