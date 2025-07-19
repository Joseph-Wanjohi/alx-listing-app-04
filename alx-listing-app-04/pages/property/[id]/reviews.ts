// pages/api/properties/[id]/reviews.ts

import { NextApiRequest, NextApiResponse } from "next";

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
};

const reviews: { [key: string]: Review[] } = {
  "1": [
    {
      id: 1,
      name: "Jane Doe",
      rating: 4,
      comment: "Great place! Very comfortable and clean.",
    },
    {
      id: 2,
      name: "John Smith",
      rating: 5,
      comment: "Amazing location and host was very responsive.",
    },
  ],
  "2": [
    {
      id: 3,
      name: "Alice",
      rating: 3,
      comment: "Good value for money, but the WiFi was slow.",
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const propertyId = Number(id);

  if (!reviews[String(propertyId)]) {
    return res.status(200).json([]);
  }

  return res.status(200).json(reviews[String(propertyId)]);
}