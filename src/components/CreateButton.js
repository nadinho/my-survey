import React from "react";
import "./Buttons.css";

export default function CreateButton(props) {
  return (
    <button className="btn" onClick={() => props.onClick("path")}>
      Create own poll
    </button>
  );
}
