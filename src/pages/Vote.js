import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

function Vote() {
  return (
    <Container>
      <p>Vote</p>
      <Link to="/result">Result</Link>
    </Container>
  );
}

export default Vote;
