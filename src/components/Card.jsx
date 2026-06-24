import React from "react";

export default function Card({ title, description, children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-4 text-blue-600">{children}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
