import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import "./App.css";
import { HomePage, LoginPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <Switch>
          <Route path="/signin" component={LoginPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
