import { useState } from "react";

const songs = [
  {
    id: 1,
    title: "Cyberpunk",
    artist: "MrClaps",
    url: "/songs/cyberpunk-492562.mp3",
    duration: "2:24",
  },
];

export const useMusic = () => {
  const [allSongs, setAllSongs] = useState([]);
};
