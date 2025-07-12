"use client";
import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AuthContext } from "@/context/AuthProvider";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

const GoogleLogin = () => {
  const { goggleLogin } = useContext(AuthContext);
  const [error, setError] = useState({});
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const router = useRouter();

  const handleGoogleSignIn = () => {
    goggleLogin()
      .then((res) => {
        toast.success("Successfully Log In");
        const userInfo = {
          email: res.user.email,
          name: res.user.displayName,
        };
        axios.post("localhost:5000/api/users", userInfo).then((res) => {
          // console.log("user added", res.data);
          router.replace(redirectTo);
        });
        // console.log(res.user);
      })
      .catch((err) => {
        setError(err.message);
        // console.log(err.message);
      });
  };
  return (
    <div>
      {/* Goggle */}
      <div className="flex items-center justify-center pb-1">
        <button
          onClick={handleGoogleSignIn}
          className="flex text-center items-center btn text-xl  rounded-lg "
        >
          <FcGoogle size={30}></FcGoogle>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
