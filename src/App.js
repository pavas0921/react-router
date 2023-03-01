import { CustomRouter } from "./router";
import "./App.scss";
import React from "react";
import { Context, initialContext } from "./context";

function App() {
  return (
    <Context.Provider value={initialContext}>
      <div className="App">
        <CustomRouter />
      </div>
    </Context.Provider>
  );
}

export default App;
