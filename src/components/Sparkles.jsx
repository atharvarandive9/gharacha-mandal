import { useEffect, useState } from "react";
import "../styles/sparkles.css";

export default function Sparkles() {

  const [stars, setStars] = useState([]);

  useEffect(() => {

    const arr = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      size: 2 + Math.random() * 5,
    }));

    setStars(arr);

  }, []);

  return (
    <div className="sparkle-container">

      {stars.map((star) => (

        <span
          key={star.id}
          className="sparkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />

      ))}

    </div>
  );
}