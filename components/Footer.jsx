import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10 bottom-0">
      <p>
        &copy; {new Date().getFullYear()} College Booking App. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
