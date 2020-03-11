import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

function Add() {
  return (
    <Container>
      <p>Create your own poll</p>
      <Link to="/vote">Vote</Link>
    </Container>
  );
}

export default Add;
