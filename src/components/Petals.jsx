import React from "react";
import "./Petals.css";

export default function Petals() {
  return (
    <div className="petals">
      {Array.from({ length: 25 }).map((_, index) => (
        <span key={index}>🌸</span>
      ))}
    </div>
  );
}