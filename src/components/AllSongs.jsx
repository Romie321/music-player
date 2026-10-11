export const AllSongs = () => {
  const { allSongs, handlePlaySong, currentTrackIndex } = useMusic();
  return (
    <div className="all-songs">
      <h2>All Songs ({allSongs.length})</h2>
      <div className="songs-grid">
        {allSongs.map((song, key) => {
          <div
            key={key}
            className={`song-card ${currentTrackIndex === key ? "active" : ""}`}
            onClick={() => handlePlaySong(song, key)}
          >
            <div className="song-info">
              <h3 className="song-title">{song.title}</h3>
              <p className="song-artist">{song.artist}</p>
              <span className="song-duration">{song.duration}</span>
            </div>
            <div className="play-button">
              {currentTrackIndex === key
                ? "https://img.icons8.com/?size=100&id=2LwcyTtr4t5g&format=png&color=000000"
                : "https://img.icons8.com/?size=100&id=loerOlJuLFzH&format=png&color=000000"}
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};
