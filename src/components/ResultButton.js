import React from "react";
import "./Buttons.css";

export default function ResultButton(props) {
  return (
    <button className="btn" onClick={() => props.onClick("path")}>
      Show results
    </button>
  );
}
