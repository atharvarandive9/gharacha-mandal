import Navbar from "../components/Navbar";
import Countdown from "../components/Countdown";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";
import Members from "../components/Members";
import Location from "../components/Location";
import Footer from "../components/Footer";

export default function InvitationPage() {
  return (
    <>
      <Navbar />
      <Countdown />
      <Timeline />
      <Gallery />
      <Members />
      <Location />
      <Footer />
    </>
  );
}