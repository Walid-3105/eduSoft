"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "@/context/AuthProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [myColleges, setMyColleges] = useState([]);
  const [reviewData, setReviewData] = useState({});
  const [submittedReviews, setSubmittedReviews] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace(`/login?redirectTo=/mycollege`);
    }
  }, [user, router]);

  useEffect(() => {
    const fetchMyColleges = async () => {
      try {
        const res = await axios.get(
          `https://edusoft-server.vercel.app/api/admissions?candidateEmail=${userEmail}`
        );
        setMyColleges(res.data);
      } catch (err) {
        console.error("Error fetching college data:", err);
      }
    };
    if (userEmail) fetchMyColleges();
  }, [userEmail]);

  const handleReviewChange = (collegeId, field, value) => {
    setReviewData((prev) => ({
      ...prev,
      [collegeId]: {
        ...prev[collegeId],
        [field]: value,
      },
    }));
  };

  const handleReviewSubmit = async (e, college) => {
    e.preventDefault();
    const { reviewText = "", rating = 5 } = reviewData[college._id] || {};

    try {
      const res = await axios.post(
        "https://edusoft-server.vercel.app/api/reviews",
        {
          userEmail,
          collegeId: college.collegeId,
          candidateName: college.candidateName,
          candidateImage: college.candidateImage,
          rating,
          reviewText,
        }
      );
      console.log(college.candidateImage);
      if (res.status === 201) {
        toast.success("Review submitted successfully!");
        setSubmittedReviews((prev) => ({ ...prev, [college._id]: true }));
      }
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review.");
    }
  };

  if (myColleges.length === 0)
    return <p className="text-center">No College Here</p>;

  return (
    <div className="max-w-3xl max-h-fit mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My College Applications</h1>

      {myColleges.map((college) => (
        <div
          key={college._id}
          className="border p-4 rounded shadow mb-8 bg-white"
        >
          <Image
            src={college.candidateImage}
            alt="Candidate"
            width={128}
            height={128}
            className="rounded-full mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold mb-2">{college.subject}</h2>
          <p>
            <strong>Candidate Name:</strong> {college.candidateName || "N/A"}
          </p>
          <p>
            <strong>Phone:</strong> {college.candidatePhone}
          </p>
          <p>
            <strong>Address:</strong> {college.address}
          </p>
          <p>
            <strong>Date of Birth:</strong> {college.dob}
          </p>

          {!submittedReviews[college._id] ? (
            <form
              onSubmit={(e) => handleReviewSubmit(e, college)}
              className="space-y-4 mt-4"
            >
              <h3 className="text-lg font-medium">Submit a Review</h3>
              <textarea
                className="w-full border p-2 rounded"
                placeholder="Write your review..."
                value={reviewData[college._id]?.reviewText || ""}
                onChange={(e) =>
                  handleReviewChange(college._id, "reviewText", e.target.value)
                }
                required
              />
              <select
                className="border p-2 rounded"
                value={reviewData[college._id]?.rating || 5}
                onChange={(e) =>
                  handleReviewChange(
                    college._id,
                    "rating",
                    Number(e.target.value)
                  )
                }
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Submit Review
              </button>
            </form>
          ) : (
            <p className="text-green-600 mt-4">Thank you for your review!</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyCollege;
