import "../styles/sparkles.css";

export default function Sparkles() {
  return (
    <div className="sparkles">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}