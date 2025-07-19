import React from "react";

interface PropertyCardProps {
  id: string
  title: string
  imageUrl: string
  location: string
  price: number
}

const PropertyCard: React.FC<PropertyCardProps> = ({ title, imageUrl, location, price }) => (
  <div className="rounded shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-sm text-gray-500">{location}</p>
      <p className="text-green-600 font-bold">GH₵ {price}</p>
    </div>
  </div>
)

export default PropertyCard