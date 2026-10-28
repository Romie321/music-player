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
    nextTrack,
    prevTrack,
    play,
    pause,
    isPlaying,
  } = useMusic();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch((err) => console.error(err));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleTimeChange = (e) => {
    const audio = audioRef.current;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      SVGAnimatedEnumeration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      nextTrack();
    };

    audio.addEventListner("loadmetadata", handleloadedMetadata);
    audio.addEventListner("timeupdate", handleTimeUpdate);
    audio.addEventListner("ended", handleEnded);

    return () => {
      audio.removeEventListner("loadmetadata", handleloadedMetadata);
      audio.removeEventListner("timeupdate", handleTimeUpdate);
      audio.removeEventListner("ended", handleEnded);
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
          onChange={handleTimeChange}
          className="progress-bar"
        />
        <span className="time">{formatTime(duration)}</span>
      </div>
      <div className="controls">
        <button className="control-btn" onClick={prevTrack}>
          <FontAwesomeIcon icon={byPrefixAndName.fas["backward-fast"]} />
        </button>
        <button
          className="control-btn play-btn"
          onClick={isPlaying ? pause() : play()}
        >
          {isPlaying ? (
            <FontAwesomeIcon icon={byPrefixAndName.fas["pause"]} />
          ) : (
            <FontAwesomeIcon icon={byPrefixAndName.fas["play"]} />
          )}
        </button>
        <button className="control-btn" onClick={nextTrack}>
          <FontAwesomeIcon icon={byPrefixAndName.fas["forward-fast"]} />
        </button>
      </div>
    </div>
  );
};
