export const PlayList = () => {
  return (
    <div className="playlists">
      <h2>Playlists</h2>
      <div className="create-playlist">
        <h3>Create New Playlist</h3>
        <div className="playlist-form">
          <input
            type="text"
            placeholder="Playlist name..."
            className="playlist-input"
          />
        </div>
      </div>
    </div>
  );
};
