import React from "react";
import "./buttons.css";

export default function ResultButton(props) {
  return (
    <button className="btn" onClick={() => props.onClick("path")}>
      Show results
    </button>
  );
}
