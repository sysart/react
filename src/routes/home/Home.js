import React, { Component } from "react";
import { EventSeat } from "@material-ui/icons";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    return fetch("https://alpaca-backend.herokuapp.com/get-stocks", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(async response => {
        console.log("res", response);
        const data = await response.json();
        console.log("result is", JSON.stringify(data));
        return data;
      })
      .catch(err => {
        console.log("API call error:", err);
        return err;
      });
  }

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
