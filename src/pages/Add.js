import React from "react";
// import { Link } from "react-router-dom";
import Container from "../components/Container";
// import VoteButton from "../components/VoteButton";
// import AskQuestion from "../components/QuestionInput";
import Button from "../components/Button";
import "./Add.css";

function Add() {
  const [question, setQuestion] = React.useState("");
  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(poll));
  }
  const poll = {
    question: question,
    answerOne: answerOne,
    answerTwo: answerTwo,
    answerThree: answerThree
  };
  return (
    <form class="form" onSubmit={handleSubmit}>
      <Container>
        <p>Create your own poll</p>

        <input
          type="text"
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
          class="input"
          placeholder="Ask your question"
        ></input>

        <p>Your answers</p>

        <div className="answerOne">
          <input
            class="input"
            placeholder="Answer 1"
            value={answerOne}
            onChange={event => {
              setAnswerOne(event.target.value);
            }}
          ></input>
          <label className="icons">
            <i class="fas fa-plus-square"></i>

            <i class="far fa-minus-square"></i>
          </label>
        </div>

        <div className="answerTwo">
          <input
            class="input"
            placeholder="Answer 2"
            value={answerTwo}
            onChange={event => {
              setAnswerTwo(event.target.value);
            }}
          ></input>
          <label className="icons">
            <i class="fas fa-plus-square"></i>

            <i class="far fa-minus-square"></i>
          </label>
        </div>

        <div className="answerThree">
          <input
            class="input"
            placeholder="Answer 3"
            value={answerThree}
            onChange={event => {
              setAnswerThree(event.target.value);
            }}
          ></input>
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
