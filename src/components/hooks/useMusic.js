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
];

export const useMusic = () => {
  const [allSongs, setAllSongs] = useState([]);
};
