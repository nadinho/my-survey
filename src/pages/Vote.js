import React from "react";
import { Link } from "react-router-dom";

function Vote() {
  return (
    <div>
      <p>Vote</p>
      <Link to="/result">Result</Link>
    </div>
  );
}

export default Vote;
