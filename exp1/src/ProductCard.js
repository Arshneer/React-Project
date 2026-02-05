import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="card">
      <div className="image-box">
        <img src={image} alt={name} />
      </div>

      <h3>{name}</h3>
      <p className="price">${price}</p>

      <span className={inStock ? "badge in" : "badge out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default ProductCard;
