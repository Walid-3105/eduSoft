import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold text-lg">{review.userName}</h3>
      <p className="text-yellow-500 mb-2">Rating: {review.rating}/5</p>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
