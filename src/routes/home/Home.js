import React, { Component } from "react";
import { EventSeat } from "@material-ui/icons";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <EventSeat className="icon" />
        <div className="trader">Trader's hot seat</div>
      </div>
    );
  }
}

export default Home;
