import { Link } from "react-router";

export const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <link className="brand-link" to="/">
          <FontAwesomeIcon icon={byPrefixAndName.far["music"]} />
          Music Player
          <FontAwesomeIcon icon={byPrefixAndName.far["music"]} />
        </link>
      </div>
      <div className="navbar-links">
        <link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
          All Songs
        </link>
        <link className={`nav-link ${}`} to="/playlists">
          Playlists
        </link>
      </div>
    </nav>
  );
};
