import React from "react";
import { useParams } from "react";
// import { Link } from "react-router-dom";
import Container from "../components/Container";
// import CreateButton from "../components/CreateButton";

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  "https://my-json-server.typicode.com/nadinho/my-survey";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);
  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }
    getPoll();
    console.log("Render Result");
  }, [pollId]);

  return (
    <Container>
      <h3>{poll?.question}</h3>
      <p>{poll?.answerOne}</p>
      <p>{poll?.answerTwo}</p>
      <p>{poll?.answerThree}</p>
    </Container>
  );
}

export default Result;
