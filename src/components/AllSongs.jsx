export const AllSongs = () => {
  const { allSongs } = useMusic();
  return (
    <div className="all-songs">
      <h1>All Songs ({allSongs.length})</h1>
    </div>
  );
};
