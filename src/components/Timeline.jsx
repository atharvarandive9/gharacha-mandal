import "../styles/timeline.css";

const events = [
  {
    title: "🙏 गणपती आगमन",
    time: "14 Sep 2026 ",
    desc: "गणरायाचे मंगल आगमन"
  },
  {
    title: "🚩 विसर्जन",
    time: "19 Sep 2026",
    desc: "गणपती बाप्पा मोरया!"
  }
];

export default function Timeline() {
  return (
    <section className="timeline-section">

      <h2>📅 उत्सवाचे कार्यक्रम</h2>

      <div className="timeline">

        {events.map((event, index) => (

          <div className="timeline-card" key={index}>

            <div className="circle"></div>

            <div className="content">

              <h3>{event.title}</h3>

              <small>{event.time}</small>

              <p>{event.desc}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}