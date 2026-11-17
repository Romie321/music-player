import { useState } from "react";

export const PlayList = () => {
  const [newPlayListName, setNewPlayListName] = useState("");
  const [selectPlaylist, setSelectPlaylist] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const { playlists, createPlaylist, allSongs } = useMusic();

  const filteredSongs = allSongs.filter((song) => {
    const matches = song.title.includes();
  });

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
              <div className="playlist-header">
                <h3>{playlist.name}</h3>
                <div className="playlist-actions">
                  <button className="delete-playlist-btn">Delete</button>
                </div>
              </div>
              <div className="add-song-section">
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search for songs to add..."
                    value={
                      selectPlaylist?.id === playlist.id ? searchQuery : ""
                    }
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSelectPlaylist(playlist);
                      setShowDropdown(e.target.value.length > 0);
                    }}
                    onFocus={() => {
                      setSelectPlaylist(playlist);
                      setShowDropdown(e.target.value.length > 0);
                    }}
                    className="song-search-input"
                  />
                  {selectPlaylist?.id === playlist.id && showDropdown && (
                    <div className="song-dropdown"></div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
