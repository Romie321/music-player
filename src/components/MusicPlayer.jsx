import { useMusic } from "../hooks/useMusic";
import { useEffect, useRef } from "react";

export const MusicPlayer = () => {
  const { currentTrack, formatTime, currentTime, duration } = useMusic();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {};

    const handleTimeUpdate = () => {};
  }, []);

  return (
    <div className="music-player">
      <audio ref={audioRef} preload="metadata" crossOrigin="anonymous" />
      <div className="track-info">
        <h3 className="track-title">{currentTrack.title}</h3>
        <p className="track-artist">{currentTrack.artist}</p>
      </div>
      <div className="progress-container">
        <span className="time">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime || 0}
          className="progress-bar"
        />
        <span className="time">{formatTime(duration)}</span>
      </div>
    </div>
  );
};
