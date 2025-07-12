"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { AuthContext } from "@/context/AuthProvider";
import toast from "react-hot-toast";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { user, logOut } = useContext(AuthContext);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Colleges", path: "/colleges" },
    { name: "Admission", path: "/admission" },
    { name: "My College", path: "/mycollege" },
  ];

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch((error) => {
        console.error("Logout Error:", error.message);
        toast.error("An error occurred while logging out. Please try again.");
      });
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className=" mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          CollegeEase
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-gray-700 hover:text-blue-600 transition ${
                pathname === link.path ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex  items-end">
          {user ? (
            <>
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="w-fit text-black px-4 py-1 rounded mx-2"
              >
                {user.displayName}
              </Link>
              <button
                onClick={handleLogout}
                className="w-fit py-1 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-105 transition-all duration-200"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-gray-700 hover:text-blue-600 transition px-2 ${
                pathname === link.path ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <>
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-4 py-1 rounded mx-2"
              >
                {user.displayName}
              </Link>
              <button
                onClick={handleLogout}
                className="w-full py-1 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-105 transition-all duration-200"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-4 py-1 rounded mx-2"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
