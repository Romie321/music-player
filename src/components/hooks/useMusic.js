import { useState } from "react";

const songs = [
  {
    id: 1,
    title: "Cyberpunk",
    artist: "MrClaps",
    url: "/songs/cyberpunk-492562.mp3",
    duration: "2:24",
  },
  {
    id: 2,
    title: "Danger",
    artist: "MrClaps",
    url: "/songs/danger-492563.mp3",
    duration: "2:43",
  },
  {
    id: 3,
    title: "Game Show",
    artist: "MrClaps",
    url: "/songs/game-show-492564.mp3",
    duration: "2:24",
  },
  {
    id: 4,
    title: "Hard Rock",
    artist: "MrClaps",
    url: "/songs/hard-rock-492565.mp3",
    duration: "2:18",
  },
  {
    id: 5,
    title: "Hate",
    artist: "MrClaps",
    url: "/songs/hate-492566.mp3",
    duration: "2:26",
  },
  {
    id: 6,
    title: "Punk",
    artist: "MrClaps",
    url: "/songs/punk-492567.mp3",
    duration: "1:58",
  },
  {
    id: 7,
    title: "Scary",
    artist: "MrClaps",
    url: "/songs/scary-492568.mp3",
    duration: "0:46",
  },
  {
    id: 8,
    title: "This Heavy Metal",
    artist: "MrClaps",
    url: "/songs/this-heavy-metal-492569.mp3",
    duration: "2:09",
  },
];

export const useMusic = () => {
  const [allSongs, setAllSongs] = useState(songs);
  const [currentTrack, setCurrentTrack] = useState(songs[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlaySong = (song, index) => {
    setCurrentTrack(song);
    setCurrentTrackIndex(index);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = (prev + 1) % allSongs.length;
      setCurrentTrack(allSongs[nextIndex]);
      return nextIndex;
    });
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = prev === 0 ? allSongs - 1 : prev - 1;
      currentTrack(allSongs[nextIndex]);
      return nextIndex;
    });
  };

  const play = setIsPlaying(true);
  const pause = setIsPlaying(false);

  const formatTime = (time) => {
    if (isNaN(time) || time === undefined) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return {
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
  };
};
