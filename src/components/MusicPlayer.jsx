import { useMusic } from "../hooks/useMusic";

export const MusicPlayer = () => {
  const { currentTrack } = useMusic();
  return (
    <div className="music-player">
      <audio />
      <div className="track-info">
        <h3>{currentTrack.title}</h3>
        <p>{currentTrack.artist}</p>
      </div>
    </div>
  );
};
