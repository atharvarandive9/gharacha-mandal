import "../styles/invitation.css";
import FlowerRain from "./FlowerRain";

export default function Invitation() {
  return (
    <section className="invitation">

      <FlowerRain />
      <img
        src="/imges/diya-left.png"
        className="diya left"
        alt="Left Diya"
      />

      <img
        src="/imges/diya-right.png"
        className="diya right"
        alt="Right Diya"
      />

      <div className="hero-title">
        <h1>🌺 गणपती बाप्पा मोरया 🌺</h1>
        <p>घरचा मंडळ आपले हार्दिक स्वागत करीत आहे</p>
      </div>

      <div className="scroll-card">

        <h3>🙏 सस्नेह आमंत्रण 🙏</h3>

        <p>
          श्री गणेशाच्या पावन आगमनानिमित्त
          आपण व आपल्या परिवारास
          आमच्या घरी आयोजित
          गणेशोत्सवात सहर्ष निमंत्रण.
        </p>

        <div className="divider"></div>

        <div className="details">

          <div>
            <span>📅</span>
            <p>14 September 2026</p>
          </div>

       

          <div>
            <span>📍</span>
            <p>
              Shri Krishna Nagar,
              Bhuvaneshwar,
              Varse, Roha-Raigad
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}