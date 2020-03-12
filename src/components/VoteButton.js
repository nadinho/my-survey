import React from "react";
import "./buttons.css";

export default function VoteButton(props) {
  return (
    <button className="btn" onClick={() => props.onClick("path")}>
      Vote
    </button>
  );
}
