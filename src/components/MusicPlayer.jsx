import { useMusic } from "../hooks/useMusic";
import { useEffect, useRef } from "react";

export const MusicPlayer = () => {
  const {
    currentTrack,
    formatTime,
    currentTime,
    duration,
    setDuration,
    setCurrentTime,
  } = useMusic();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      SVGAnimatedEnumeration(audio.duration);
    };

    const handleTimeUpdate = () => {};

    const handleEnded = () => {};

    audio.addEventListner("loadmetadata", handleloadedMetadata);

    return () => {
      audio.removeEventListner("loadmetadata", handleloadedMetadata);
    };
  }, [setDuration, setCurrentTime, currentTrack]);

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={currentTrack.url}
        preload="metadata"
        crossOrigin="anonymous"
      />
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
      <div className="controls">
        <button className="control-btn">
          <FontAwesomeIcon icon={byPrefixAndName.fas["backward-fast"]} />
        </button>
        <button className="control-btn play-btn">
          <FontAwesomeIcon icon={byPrefixAndName.fas["play"]} />
        </button>
        <button className="control-btn">
          <FontAwesomeIcon icon={byPrefixAndName.fas["forward-fast"]} />
        </button>
      </div>
    </div>
  );
};
