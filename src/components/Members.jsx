import "../styles/members.css";

const members = [
  {
    name: "Atharv Randive",
    role: "Organizer",
    image: "/imges/members/1.jpg",
  },
  {
    name: "Member 2",
    role: "Volunteer",
    image: "/imges/members/2.jpg",
  },
  {
    name: "Member 3",
    role: "Volunteer",
    image: "/imges/members/3.jpg",
  },
  {
    name: "Member 4",
    role: "Volunteer",
    image: "/imges/members/4.jpg",
  },
   {
    name: "Member 5",
    role: "Volunteer",
    image: "/imges/members/5.jpg",
  },
];

export default function Members() {
  return (
    <section className="members-section">

      <h2>👨‍👩‍👧 घरचा मंडळ परिवार</h2>

      <div className="members-grid">

        {members.map((member, index) => (

          <div className="member-card" key={index}>

            <img src={member.image} alt={member.name} />

            <h3>{member.name}</h3>

            <p>{member.role}</p>

          </div>

        ))}

      </div>

    </section>
  );
}