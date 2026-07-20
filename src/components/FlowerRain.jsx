import { useEffect, useState } from "react";
import "../styles/effects.css";

const petals = [
  "/imges/petals/petal1.png",
  "/imges/petals/petal2.png",
  "/imges/petals/petal3.png",
];

export default function FlowerRain() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 6,
      size: 20 + Math.random() * 30,
      image: petals[Math.floor(Math.random() * petals.length)],
    }));

    setItems(arr);
  }, []);

  return (
    <div className="flower-container">
      {items.map((petal) => (
        <img
          key={petal.id}
          src={petal.image}
          className="flower"
          alt=""
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: `${petal.size}px`,
          }}
        />
      ))}
    </div>
  );
}