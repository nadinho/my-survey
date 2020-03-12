import React from "react";
import "./QuestionInput.css";

export default function AskQuestion(props) {
  return <input type="text" value = {question}
  onChange = {event () => setQuestion(event.target.value)}class="input" placeholder="Ask your question"></input>;
}
