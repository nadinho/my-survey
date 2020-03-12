import React from "react";
// import { Link } from "react-router-dom";
import Container from "../components/Container";
// import VoteButton from "../components/VoteButton";
// import AskQuestion from "../components/QuestionInput";
import Button from "../components/Button";
import "./Add.css";

function Add() {
  const [question, SetQuestion] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(poll));
  }
  const poll = {
    question: question
  };
  return (
      <form class="form" onSubmit={handleSubmit}>
    <Container>
        <p>Create your own poll</p>

        <input
          type="text"
          value={question}
          onChange={event => {
            SetQuestion(event.target.value);
          }}
          class="input"
          placeholder="Ask your question"
        ></input>

        <p>Your answers</p>

        <div className="answerOne">
          <input class="input" placeholder="Answer 1"></input>
          <label className="icons">
            <i class="fas fa-plus-square"></i>

            <i class="far fa-minus-square"></i>
          </label>
        </div>

        <div className="answerTwo">
          <input class="input" placeholder="Answer 2"></input>
          <label className="icons">
            <i class="fas fa-plus-square"></i>

            <i class="far fa-minus-square"></i>
          </label>
        </div>

        <div className="answerThree">
          <input class="input" placeholder="Answer 3"></input>
          <label className="icons">
            <i class="fas fa-plus-square"></i>

            <i class="far fa-minus-square"></i>
          </label>
        </div>

        <Button>Vote</Button>
        {/* <Link to="/vote">
        <VoteButton to="/vote" onClick={VoteButton}></VoteButton>
      </Link> */}
      </Container>
      </form>
    
  );
}

export default Add;
