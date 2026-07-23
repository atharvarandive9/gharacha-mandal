import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import FlowerRain from "../components/FlowerRain";
import Sparkles from "../components/Sparkles";

export default function Home() {

  const navigate = useNavigate();
  const [flash, setFlash] = useState(false);
  const bell = new Audio("/audio/bell.mp3");

const openInvitation = () => {

  bell.play();

  setFlash(true);

  setTimeout(() => {
    navigate("/invitation");
  }, 1800);

};

  return (
    <>
      <FlowerRain />
      <Sparkles />

      {flash && <div className="gold-flash"></div>}

      <Hero onOpen={openInvitation} />
    </>
  );
}