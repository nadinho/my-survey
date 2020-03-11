import React from "react";
import { Link } from "react-router-dom";

function Add() {
  return (
    <div>
      <p>Add</p>
      <Link to="/vote">Vote</Link>
    </div>
  );
}

export default Add;
