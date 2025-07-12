"use client";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Calendar, Trophy, Info } from "lucide-react";
import { AuthContext } from "@/context/AuthProvider";

const CollegeDetailPage = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [college, setCollege] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace(`/login?redirectTo=/colleges/${id}`);
    }
  }, [user, router, id]);

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        const res = await fetch(
          `https://edusoft-server.vercel.app/api/colleges/${id}`
        );
        const data = await res.json();
        setCollege(data);
      } catch (err) {
        console.error("Error fetching college:", err);
      }
    };

    if (id) fetchCollege();
  }, [id]);

  if (!college) {
    return <div className="p-6 text-center">Loading college details...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Image
          src={college.collegeImage}
          alt={college.collegeName}
          width={900}
          height={500}
          className="rounded-lg shadow-lg mx-auto"
        />
        <h1 className="text-4xl font-bold text-center mt-4 mb-2">
          {college.collegeName}
        </h1>
        <p className="text-center text-gray-500">
          Admission:{" "}
          <span className="font-medium">{college.admissionDates}</span>
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Info className="w-5 h-5 text-blue-600" />
          About
        </h2>
        <p className="text-gray-700">{college.description}</p>
        <p className="mt-4 text-sm text-gray-500 italic">
          {college.researchHistory}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-purple-700">
          <Calendar className="w-5 h-5" />
          Major Events
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {college.events.map((event, index) => (
            <li
              key={index}
              className="bg-purple-100 p-4 rounded shadow hover:bg-purple-200 transition"
            >
              🎉 {event}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-green-700">
          <Trophy className="w-5 h-5" />
          Popular Sports
        </h2>
        <div className="flex flex-wrap gap-3">
          {college.sports.map((sport, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow"
            >
              🏅 {sport}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-blue-50 p-6 rounded-lg shadow">
        <p>
          <strong>Rating:</strong>{" "}
          <span className="text-blue-600">{college.collegeRating} ⭐</span>
        </p>
        <p>
          <strong>Research Count:</strong>{" "}
          <span className="text-blue-600">{college.researchCount}</span>
        </p>
      </div>
    </div>
  );
};

export default CollegeDetailPage;
