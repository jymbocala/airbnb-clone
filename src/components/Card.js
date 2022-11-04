import React from "react";

export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      
      <img src={`../images/${props.item.coverImg}`} className="card--image" alt="Katie Zaferes" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" alt="star" />
        <span>{props.item.rating}</span>
        <span className="gray">({props.item.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}