import { useState } from "react";

export const PlayList = () => {
  const [newPlayListName, setNewPlayListName] = useState("");
  const [selectPlaylist, setSelectPlaylist] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const { playlists, createPlaylist, allSongs, currentTrackIndex } = useMusic();

  const filteredSongs = allSongs.filter((song) => {
    const matches =
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase());

    const isAlreadyInPlaylist = selectPlaylist?.songs.some(
      (playlistSong) => playlistSong.id === song.id,
    );

    return matches && !isAlreadyInPlaylist;
  });

  const handleCreatePlaylist = () => {
    if (newPlaylist.trim()) {
      createPlaylist(newPlayListName.trim());
      setNewPlayListName("");
    }
  };

  const handleAddSong = (song) => {
    if (selectPlaylist) {
      addSongToPlaylist(selectedPlaylist.id, song);
      setSearchQuery("");
      setShowDropdown(false);
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
                    onFocus={(e) => {
                      setSelectPlaylist(playlist);
                      setShowDropdown(e.target.value.length > 0);
                    }}
                    className="song-search-input"
                  />
                  {selectPlaylist?.id === playlist.id && showDropdown && (
                    <div className="song-dropdown">
                      {filteredSongs.length === 0 ? (
                        <div className="dropdown-item no-results">
                          No songs found.
                        </div>
                      ) : (
                        filteredSongs.slice(0, 5).map((song, key) => (
                          <div
                            key={key}
                            className="dropdown-item"
                            onClick={() => handleAddSong(song)}
                          >
                            <span className="song-title">{song.title}</span>
                            <span className="song-artist">{song.artist}</span>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="playlist-song">
                {playlist.songs.length === 0 ? (
                  <p>No songs are in this playlist.</p>
                ) : (
                  playlist.songs.map((song, key) => (
                    <div className={`playlist-song ${}`} key={key}>
                      <div className="song-info">
                        <span className="song-title">{song.title}</span>
                        <span className="song-artist">{song.artist}</span>
                      </div>
                      <span className="song-duration">{song.duration}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
