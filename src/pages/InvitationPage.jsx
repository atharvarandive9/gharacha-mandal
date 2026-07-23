import { useEffect, useState } from "react";

import Invitation from "../components/Invitation";
import Navbar from "../components/Navbar";
import Countdown from "../components/Countdown";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";
import Members from "../components/Members";
// import Location from "../components/Location";
import Footer from "../components/Footer";
import FlowerRain from "../components/FlowerRain";
import Sparkles from "../components/Sparkles";

export default function InvitationPage() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={show ? "page-show" : "page-hide"}>
      <FlowerRain />
      <Sparkles />

      <Navbar />
      <Invitation />
      <Countdown />
      <Timeline />
      <Gallery />
      <Members />
      {/* <Location /> */}
      <Footer />
    </div>
  );
}