export const MusicPlayer = () => {
  const {} = useMusic();
  return (
    <div className="music-player">
      <audio />
      <div className="track-info">
        <h3></h3>
      </div>
    </div>
  );
};
