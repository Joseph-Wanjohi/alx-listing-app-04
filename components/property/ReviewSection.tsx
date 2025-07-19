// components/property/ReviewSection.tsx

import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

interface ReviewSectionProps {
  propertyId: number;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="p-4">Loading reviews...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className="p-4">No reviews yet.</p>;
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-2">User Reviews</h2>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border border-gray-200 rounded-md p-4 shadow-sm"
        >
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-medium">{review.name}</h3>
            <span className="text-yellow-500">{`⭐️ ${review.rating}/5`}</span>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;