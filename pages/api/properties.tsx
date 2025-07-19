// pages/api/properties/[id].ts

import { NextApiRequest, NextApiResponse } from "next";

const properties = [
  {
    id: 1,
    title: "Modern Home in Accra",
    location: "East Legon",
    price: 3000,
    image: "/images/property-1.jpg",
    description: "A luxurious home in the heart of East Legon.",
  },
  {
    id: 2,
    title: "Cozy Apartment",
    location: "Osu",
    price: 1800,
    image: "/images/property-2.jpg",
    description: "Perfect for students or young professionals.",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = properties.find((prop) => prop.id === Number(id));

  if (property) {
    res.status(200).json(property);
  } else {
    res.status(404).json({ message: "Property not found" });
  }
}