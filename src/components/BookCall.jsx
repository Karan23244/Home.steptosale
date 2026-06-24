import React from "react";

export default function BookCall({ className }) {
  return (
    <a
      href="/contact"
      className={`${className || ""} inline-block bg-red-600 text-white px-4 py-2 rounded`}>
      Book a Call
    </a>
  );
}
