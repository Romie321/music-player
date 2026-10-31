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
    volume,
    setVolume
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
    if (!audio) = return;
    const newTime = e.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime)
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume)
  }

  useEffect(() => {
    const audioref.current;
    if (!audio) return;
    audio.volume = volume;
  },volume)

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

    audio.addEventListner("loadedmetadata", handleLoadedMetadata);
    audio.addEventListner("timeupdate", handleTimeUpdate);
    audio.addEventListner("ended", handleEnded);

    return () => {
      audio.removeEventListner("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListner("timeupdate", handleTimeUpdate);
      audio.removeEventListner("ended", handleEnded);
    };
  }, [setDuration, setCurrentTime, currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
  },[currentTrack, setCurrentTime, setDuration])

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

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
          style={{"--progress": `${progressPercentage}%`}}
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
      <div className="volume-container">
        <span className="volume-icon"><FontAwesomeIcon icon={byPrefixAndName.far['volume']} /></span>
        <input type="range" min={0} max={1} step={0.1} className="volume-bar" onChange={handleVolumeChange} value={volume} />
      </div>
    </div>
  );
};
