import React from "react";

export const Card = props => (
  <div>
    <h1 key={props.email}>{props.name}</h1>
  </div>
);
