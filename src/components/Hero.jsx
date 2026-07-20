import "./../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <img
          src="/imges/ganpati.png"
          alt="Ganpati Bappa"
          className="ganpati"
        />

        <p className="subtitle">
          ॥ श्री गणेशाय नमः ॥
        </p>


        <h1>
          घरचा मंडळ
        </h1>


        <h2>
          Ganpati Agaman 2026
        </h2>

        <p className="description">
          आपल्या उपस्थितीने आमचा उत्सव अधिक मंगलमय होईल.
        </p>

        <a href="#invitation" className="invite-btn">
          View Invitation
        </a>

        <div className="scroll">
          ⌄
        </div>

      </div>

    </section>
  );
}
