import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import SingleItem from "../SingleItem/SingleItem";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {isHome && (
          <Link to={path} className="item-list__hook">
            Mostrar tudo
          </Link>
        )}
      </div>

      <div className="item-list_container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
