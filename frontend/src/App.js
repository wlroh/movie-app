import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./router/About";
import Home from "./router/Home";
import Detail from "./router/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
