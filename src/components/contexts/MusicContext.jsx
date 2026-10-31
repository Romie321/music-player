import { createContext } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  export const useMusic = () => {
    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    const handlePlaySong = (song, index) => {
      setCurrentTrack(song);
      setCurrentTrackIndex(index);
      setIsPlaying(false);
    };

    const nextTrack = () => {
      setCurrentTrackIndex((prev) => {
        const nextIndex = (prev + 1) % allSongs.length;
        setCurrentTrack(allSongs[nextIndex]);
        return nextIndex;
      });
      setIsPlaying(false);
    };

    const prevTrack = () => {
      setCurrentTrackIndex((prev) => {
        const nextIndex = prev === 0 ? allSongs - 1 : prev - 1;
        currentTrack(allSongs[nextIndex]);
        return nextIndex;
      });
      setIsPlaying(false);
    };

    const play = setIsPlaying(true);
    const pause = setIsPlaying(false);
  };
  return (
    <MusicContext.Provider
      value={{
        allSongs,
        handlePlaySong,
        currentTrack,
        currentTrackIndex,
        currentTime,
        formatTime,
        duration,
        setDuration,
        nextTrack,
        prevTrack,
        play,
        pause,
        isPlaying,
        volume,
        setVolume,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
