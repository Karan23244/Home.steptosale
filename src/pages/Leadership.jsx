import React from "react";

const leaders = [
  { name: "Alex Morgan", title: "Founder & CEO" },
  { name: "Jordan Lee", title: "Chief Growth Officer" },
  { name: "Sam Rivera", title: "Head of Media" },
];

export default function Leadership() {
  return (
    <main className="min-h-screen py-24">
      <div className="section-inner">
        <div className="section-label">Leadership</div>
        <h1 className="section-title">Our Leadership</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {leaders.map((l) => (
            <div key={l.name} className="bg-white/5 p-6 rounded">
              <div className="text-xl font-bold text-white">{l.name}</div>
              <div className="text-sm text-gray-300 mt-2">{l.title}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
