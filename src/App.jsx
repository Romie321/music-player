import { AllSongs } from "./components/AllSongs";
import {PlayList} from "./component/PlayList"
import { MusicPlayer } from "./components/MusicPlayer";
import { BrowserRouter, Routes, Route } from "react-router";
import { MusicProvider } from "./components/contexts/MusicContext";

function App() {
  return (
    <BrowserRouter>
      <MusicProvider>
        <div className="app">
         <navbar />
         <main className="app-main">
            <div className="player-section">
             <MusicPlayer />
            </div>
            <div className="content-section">
              <Routes>
               <Route path="/" element{AllSongs} />
                <Route path="playlist" element{PlayList} />
              </Routes>
            </div>
          </main>
        </div>
      </MusicProvider>
    </BrowserRouter>
  );
}

export default App;
