import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import ResultButton from "../components/ResultButton";

function Vote() {
  return (
    <Container>
      <p>Vote</p>
      <Link to="/result">
        {" "}
        <ResultButton to="/add" onClick={ResultButton}></ResultButton>
      </Link>
    </Container>
  );
}

export default Vote;
