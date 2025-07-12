"use client";
import React, { useEffect, useState } from "react";
import CollegeCard from "../../../components/CollegeCard";
import SearchBar from "../../../components/SearchBar";

const CollegesPage = () => {
  const [colleges, setColleges] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await fetch(
          `https://edusoft-server.vercel.app/api/colleges`
        );
        const data = await res.json();
        setColleges(data);
        setFiltered(data);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      }
    };

    fetchColleges();
  }, []);

  const handleSearch = (query) => {
    if (!query.trim()) {
      setFiltered(colleges);
      return;
    }

    const filteredList = colleges.filter((college) =>
      college.collegeName.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredList);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
          Explore Top Colleges
        </h1>

        <div className="max-w-xl mx-auto mb-10">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((college) => (
            <div
              key={college._id}
              className="transition transform hover:-translate-y-1 hover:shadow-xl duration-300"
            >
              <CollegeCard college={college} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-12 text-lg">
            No colleges found. Try a different name.
          </p>
        )}
      </div>
    </div>
  );
};

export default CollegesPage;
