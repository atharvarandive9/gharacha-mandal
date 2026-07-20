import { motion } from "framer-motion";
import "../styles/loader.css";

function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-glow"></div>

      <motion.div
        className="loader-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="loader-bell"
          animate={{
            rotate: [0, -10, 10, -6, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          🔔
        </motion.div>

        <motion.h1
          className="loader-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.h1>

        <motion.p
          className="loader-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Ganpati Agaman 2026
        </motion.p>
      </motion.div>

      <div className="loader-petals">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            🌸
          </span>
        ))}
      </div>
    </div>
  );
}

export default Loader;