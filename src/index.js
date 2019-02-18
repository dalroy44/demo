import React from "react";
import ReactDOM from "react-dom";

import BeforeExampleButton from "./BeforeExampleButton";
import AfterExampleButton from "./AfterExampleButton";

import "./styles.css";

function App() {
  return (
    <div className="App">
      Before: <BeforeExampleButton />
      <br />
      After: <AfterExampleButton />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
