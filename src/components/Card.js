import React from "react";

const Card = (props) => (
  <div className="card">
    <h3>{props.name}</h3>
    <span>{props.quantity} {props.unit}</span>
  </div>
);

export default Card;
