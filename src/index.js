import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header>&nbsp;</Header>
    </div>
  );
}

export default function bootstrap(config) {
  ReactDOM.render(<App />, rootElement);
}