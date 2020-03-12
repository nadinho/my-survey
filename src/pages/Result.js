import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CreateButton from "../components/CreateButton";

function Result() {
  return (
    <Container>
      <p>Result</p>
      <Link to="/">
        <CreateButton to="/add" onClick={CreateButton}></CreateButton>
      </Link>
    </Container>
  );
}

export default Result;
