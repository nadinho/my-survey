import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import VoteButton from "../components/VoteButton";

function Add() {
  return (
    <Container>
      <p>Create your own poll</p>
      <Link to="/vote">
        <VoteButton to="/vote" onClick={VoteButton}></VoteButton>
      </Link>
    </Container>
  );
}

export default Add;
