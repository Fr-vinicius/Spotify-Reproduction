import React from "react";
import "./styles.css";
import ItemList from "../ItemList/ItemList";
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistArray}
          idPath="/artist"
          path="/artists"
        />
      ) : (
        <></>
      )}

      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songsArray}
          idPath="/song"
          path="/songs"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
