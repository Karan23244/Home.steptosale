import React from "react";

const items = [
  "Programmatic Display",
  "Attribution Modeling",
  "Social Ads",
  "Mobile Marketing",
  "Web Marketing",
  "Performance, Perfected",
];

export default function Marquee() {
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {Array.from({ length: 2 }).map((_, i) => (
          <React.Fragment key={i}>
            {items.map((it) => (
              <React.Fragment key={it}>
                <span>{it}</span>
                <div className="marquee-dot" />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
