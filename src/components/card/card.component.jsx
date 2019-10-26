import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${props.id}?set=set2`} />
    <h1 key={props.id}>{props.name}</h1>
  </div>
);
