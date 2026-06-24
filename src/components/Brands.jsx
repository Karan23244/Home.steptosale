import React from "react";

const brands = [
  {
    name: "Adobe",
    logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
    category: "Software",
  },
  {
    name: "Agoda",
    logo: "/agoda-1.svg",
    category: "Travel",
  },
  {
    name: "AliExpress",
    logo: "/aliexpress-logo.svg",
    category: "Ecommerce",
  },
  {
    name: "Udemy",
    logo: "/udemy-2.svg",
    category: "Education",
  },
  {
    name: "Farfetch",
    logo: "/myntra-1.svg",
    category: "Fashion",
  },
  {
    name: "Walmart",
    logo: "/walmart-4.svg",
    category: "Retail",
  },
  {
    name: "Qatar Airways",
    logo: "/qatar-airways-1.svg",
    category: "Travel",
  },
  {
    name: "Shopify",
    logo: "/shopify-2.svg",
    category: "Ecommerce",
  },
];

export default function Brands() {
  return (
    <section className="brands" id="brands">
      <div className="section-inner">
        <div className="brands-header reveal">
          <div className="section-label">TRUSTED BY</div>

          <h2 className="section-title">
            BRANDS WE
            <br />
            POWER
          </h2>
        </div>

        <div className="brands-grid">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className={`brand-card reveal ${
                i % 4 === 0 ? "reveal-delay-1" : ""
              }`}>
              <div className="brand-logo-wrap">
                <img src={brand.logo} alt={brand.name} />
              </div>

              <div className="brand-cat">{brand.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
