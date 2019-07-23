import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.handleIncrement(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.removeFriend(props.id)} className="remove">
    </span>
  </div>
);

export default FriendCard;