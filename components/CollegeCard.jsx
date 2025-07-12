import React from "react";
import Link from "next/link";

const CollegeCard = ({ college }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
      <img
        src={college.collegeImage}
        alt={college.collegeName}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <h2 className="text-xl font-semibold mb-2">{college.collegeName}</h2>

      {/* College Rating */}
      <p className="text-gray-700 font-medium mb-1">
        ⭐ Rating: {college.collegeRating}
      </p>

      {/* Admission Dates */}
      <p className="text-gray-700 mb-1">
        📅 Admission: {college.admissionDates}
      </p>

      {/* Research Count */}
      <p className="text-gray-700 mb-4">
        📚 Research Papers: {college.researchCount}
      </p>

      <Link
        href={`/colleges/${college._id}`}
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default CollegeCard;
