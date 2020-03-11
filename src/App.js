import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <>
        <Header>My Survey</Header>
        <main>
          <div>
            <Switch>
              <Route path="/add">
                <Add />
              </Route>
              <Route path="/vote">
                <Vote />
              </Route>
              <Route path="/result">
                <Result />
              </Route>
            </Switch>
          </div>
        </main>
      </>
    </Router>
  );
}

export default App;
