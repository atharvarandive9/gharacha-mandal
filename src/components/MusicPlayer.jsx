import { useRef, useState } from "react";
import "../styles/music.css";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/ganpati.mp3" type="audio/mpeg" />
      </audio>

      <button
        className={`music-btn ${playing ? "playing" : ""}`}
        onClick={toggleMusic}
      >
        {playing ? "🔊" : "🎵"}
      </button>
    </>
  );
}