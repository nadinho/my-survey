import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
// import VoteButton from "../components/VoteButton";
import AskQuestion from "../components/QuestionInput";
import Button from "../components/Button";

function Add() {
  return (
    <Container>
      <p>Create your own poll</p>
      <AskQuestion></AskQuestion>
      <p>Your answers</p>
      <input class="input" placeholder="Answer 1"></input>
      <input class="input" placeholder="Answer 2"></input>
      <input class="input" placeholder="Answer 3"></input>
      <Button>Vote</Button>
      {/* <Link to="/vote">
        <VoteButton to="/vote" onClick={VoteButton}></VoteButton>
      </Link> */}
    </Container>
  );
}

export default Add;
