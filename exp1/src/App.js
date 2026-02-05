import React from "react";
import ProductCard from "./ProductCard";
import headphonesImg from "./images/headsets.jpg";
import keyboardImg from "./images/keybrd.jpg";
import watchImg from "./images/watch.jpg";

function App() {
  return (
    <div style={{
      display: "flex",
      gap: "30px",
      padding: "40px",
      background: "#f8fafc",
      minHeight: "10vh"
    }}>
      
      <ProductCard
        name="Wireless Headphones"
        price="129.99"
        image={headphonesImg}
        inStock={true}
      />

      <ProductCard
        name="Mechanical Keyboard"
        price="89.99"
        image={keyboardImg}
        inStock={false}
      />

      <ProductCard
        name="Smart Watch"
        price="199.99"
        image={watchImg}
        inStock={true}
      />

    </div>
  );
}
export default App;
