import React from "react";
import ReactDOM from "react-dom";

import Header from "~/Header";
import Page from "~/Page";
import data from "./data";

const App = () => (
  <div>
    <Header />
    {data.map((page, index) => (
      <Page key={index} page={index + 1} items={page} />
    ))}
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
