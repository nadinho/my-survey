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

  async function handleSubmit(event) {
    event.preventDefault();

    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree
    };
    const response = await fetch(
      process.env.REACT_APP_POLLS_API ||
        "https://my-json-server.typicode.com/nadinho/my-survey/polls",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(poll)
      }
    );
    const createdPoll = await response.json();
    alert(`Created new Poll with ${createdPoll.id}`);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Container>
        <p>Create your own poll</p>

        <input
          type="text"
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
          className="questionInput"
          placeholder="Ask your question"
        ></input>

        <p>Your answers</p>

        <div className="answerOne">
          <input
            className="answerInput"
            placeholder="Answer 1"
            value={answerOne}
            onChange={event => {
              setAnswerOne(event.target.value);
            }}
          ></input>
          <label className="icons">
            <i className="fas fa-plus-square"></i>

            <i className="far fa-minus-square"></i>
          </label>
        </div>

        <div className="answerTwo">
          <input
            className="answerInput"
            placeholder="Answer 2"
            value={answerTwo}
            onChange={event => {
              setAnswerTwo(event.target.value);
            }}
          ></input>
          <label className="icons">
            <i className="fas fa-plus-square"></i>

            <i className="far fa-minus-square"></i>
          </label>
        </div>

        <div className="answerThree">
          <input
            className="answerInput"
            placeholder="Answer 3"
            value={answerThree}
            onChange={event => {
              setAnswerThree(event.target.value);
            }}
          ></input>
          <label className="icons">
            <i className="fas fa-plus-square"></i>

            <i className="far fa-minus-square"></i>
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
