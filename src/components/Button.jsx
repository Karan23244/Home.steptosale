import React from "react";

export default function Button({ children, onClick, variant = "primary" }) {
  const base = "px-4 py-2 rounded-md font-medium focus:outline-none";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
