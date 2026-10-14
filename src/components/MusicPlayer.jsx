import { useMusic } from "../hooks/useMusic";

export const MusicPlayer = () => {
  const { currentTrack } = useMusic();
  return (
    <div className="music-player">
      <audio />
      <div className="track-info">
        <h3>{currentTrack}</h3>
      </div>
    </div>
  );
};
