import Hero from "./components/Hero";
import FlowerRain from "./components/FlowerRain";
import Sparkles from "./components/Sparkles";
import Fog from "./components/Fog";
import Invitation from "./components/Invitation";
import Countdown from "./components/Countdown";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Members from "./components/Members";
import MusicPlayer from "./components/MusicPlayer";
function App() {
  return (
    <>
      <Fog />
      <Sparkles />
      <FlowerRain />
      <Hero />
      <Invitation />
      <Countdown />
      <Timeline/>
      <Gallery/>
      <Members/>
      <MusicPlayer/>

    </>
  );
}

export default App;