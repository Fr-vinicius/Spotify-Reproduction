import React, { useState } from "react";
import SongItem from "../SongItem/SongItem";
import "./styles.css";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);
  return (
    <div className="song-list">
      {songsArray
        .filter((currentindex, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}
      <p
        onClick={() => {
          setItems(items + 5);
        }}
        className="song-list__see-more"
      >
        {items < 10 && "Ver Mais"}
      </p>
    </div>
  );
};

export default SongList;
