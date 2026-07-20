import { useEffect, useState } from "react";
import "../styles/countdown.css";

export default function Countdown() {

  // Change this to your Ganpati Agaman date
  const targetDate = new Date("2026-09-14T09:00:00").getTime();

  const calculateTime = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    return {
      days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((distance / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((distance / 1000) % 60)),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">

      <h2>⏳ गणपती आगमनासाठी उर्वरित वेळ</h2>

      <div className="count-box">

        <div>
          <h1>{time.days}</h1>
          <p>Days</p>
        </div>

        <div>
          <h1>{time.hours}</h1>
          <p>Hours</p>
        </div>

        <div>
          <h1>{time.minutes}</h1>
          <p>Minutes</p>
        </div>

        <div>
          <h1>{time.seconds}</h1>
          <p>Seconds</p>
        </div>

      </div>

    </section>
  );
}