"use client";
import React, { useState, useRef, useContext, useEffect } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter, useSearchParams } from "next/navigation";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirectTo = searchParams.get("redirectTo") || "/";

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    userLogin(email, password)
      .then((result) => {
        e.target.reset();
        toast.success("Successfully Logged In");
        router.push(redirectTo);
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        toast.error("Incorrect Email or Password");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-md">
        <div className="mb-6">
          <Link
            href="/"
            className="flex gap-2 items-center text-[#023E8A] hover:underline font-medium"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Log In
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-[#023E8A] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#023E8A] transition duration-200"
              required
              ref={emailInputRef}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
                required
                ref={passwordInputRef}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="text-right mt-2">
              <Link
                href="/auth/forgetPassword"
                className="text-sm text-[#023E8A] hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {error.login && (
            <p className="text-red-600 text-sm text-center">{error.login}</p>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-[#023E8A] text-white py-3 rounded-lg hover:bg-[#0353A4] transition duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </div>
        </form>

        <h1 className="text-center items-center text-xl text-gray-500 mt-4">
          ----- or -----
        </h1>
        <div className="mt-3 text-center">
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
