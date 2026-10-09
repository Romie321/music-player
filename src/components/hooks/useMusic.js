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
  const [allSongs, setAllSongs] = useState([]);
};
