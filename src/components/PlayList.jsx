import { useState } from "react";

export const PlayList = () => {
  const [newPlayListName, setNewPlayListName] = useState("");

  const { playlists, createPlaylist } = useMusic();

  const handleCreatePlaylist = () => {
    if (newPlaylist.trim()) {
      createPlaylist(newPlayListName.trim());
      setNewPlayListName("");
    }
  };
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
            onClick={(e) => setNewPlayListName(e.target.value)}
            value={newPlaylistName}
          />
          <button className="create-btn" onClick={handleCreatePlaylist}>
            Create
          </button>
        </div>
      </div>
      <div className="playlists-list">
        {playlists.length === 0 ? (
          <p className="empty-message">No playlists have been created yet.</p>
        ) : (
          playlists.map((playlist, key) => (
            <div playlist-item key={key}>
              <div>
                <h3 className="playlist-header">{playlist.name}</h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
