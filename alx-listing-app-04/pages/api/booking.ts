// pages/api/bookings.ts

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      cardNumber,
      expirationDate,
      cvv,
      billingAddress,
    } = req.body;

    // Simple validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !cardNumber ||
      !expirationDate ||
      !cvv ||
      !billingAddress
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Simulate saving the booking (e.g., to a database)
    return res.status(200).json({ message: "Booking saved successfully" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}