import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

function Result() {
  return (
    <Container>
      <p>Result</p>
      <Link to="/">Add</Link>
    </Container>
  );
}

export default Result;
