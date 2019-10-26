import React, { Component } from "react";
import "./card-list.styles.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <h1 key={monster.email}>{monster.name}</h1>
      ))}
    </div>
  );
};
