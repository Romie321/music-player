import { useState } from "react";

export const PlayList = () => {
  const [newPlayListName, setNewPlayListName] = useState("");

  const handleCreatePlaylist = () => {};
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
            onClick={(e) => setNewChangeList(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
