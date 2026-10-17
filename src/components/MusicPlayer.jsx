import { useMusic } from "../hooks/useMusic";

export const MusicPlayer = () => {
  const { currentTrack, formatTime, currentTime, duration } = useMusic();
  return (
    <div className="music-player">
      <audio />
      <div className="track-info">
        <h3 className="track-title">{currentTrack.title}</h3>
        <p className="track-artist">{currentTrack.artist}</p>
      </div>
      <div className="progress-container">
        <span className="time">{formatTime(currentTime)}</span>
        <input />
        <span className="time">{formatTime(duration)}</span>
      </div>
    </div>
  );
};
