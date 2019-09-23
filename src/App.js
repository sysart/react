import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/home/Home";

const Index = () => <Header />;

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Index} />
        <Route path="/home/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
