import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import VoteButton from "../components/VoteButton";
import AskQuestion from "../components/input";

function Add() {
  return (
    <Container>
      <p>Create your own poll</p>
      <AskQuestion></AskQuestion>
      <Link to="/vote">
        <VoteButton to="/vote" onClick={VoteButton}></VoteButton>
      </Link>
    </Container>
  );
}

export default Add;
