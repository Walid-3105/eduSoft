"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch("https://edusoft-server.vercel.app/api/reviews");
      const data = await res.json();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - cardsPerPage, 0));
  };

  const handleNext = () => {
    if (startIndex + cardsPerPage < reviews.length) {
      setStartIndex((prev) => prev + cardsPerPage);
    }
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="py-16  max-w-7xl mx-auto px-4 bg-white">
      <div className="text-center mb-10 ">
        <h2 className="text-3xl font-bold text-gray-800">
          Recent Comments from Student
        </h2>
        <p className="text-gray-500 mt-2">
          What students say about our college...
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleReviews.map((review) => (
            <div
              key={review._id}
              className="bg-green-50 rounded-xl shadow p-6 relative text-center h-[224px]"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src={
                    review.candidateImage ||
                    "https://i.ibb.co/JxWqPFn/default-user.png"
                  }
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                />
              </div>
              <div className="mt-10">
                <h4 className="text-lg font-bold text-green-800">
                  {review.candidateName || "Anonymous"}
                </h4>
                <span className="text-sm text-gray-400">
                  {review.date ||
                    new Date(review.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                    })}
                </span>
                <p className="mt-3 text-gray-700">{review.reviewText}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + cardsPerPage >= reviews.length}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
