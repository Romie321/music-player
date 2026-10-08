import { MusicPlayer } from "./components/MusicPlayer";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div className="app">
      <navbar />
      <main className="app-main">
        <div className="player-section">
          <MusicPlayer />
        </div>
        <div className="content-section"></div>
      </main>
    </div>
  );
}

export default App;
