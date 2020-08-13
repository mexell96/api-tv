import React, { Component } from "react";

import { getShows } from "../api/show";
import Show from "./Show";
import "./style.css";

export default class ShowList extends Component {
  state = {
    shows: [],
  };

  async componentDidMount() {
    const shows = await getShows();
    this.setState({ shows })
  }

  render() {
    return (
      <ul className="flex">
        {this.state.shows.length > 0 
          ? this.state.shows.map((show) => (
            <Show 
              key={show.id} 
              name={show.name} 
              image={show.image}
              language={show.language}
              premiered={show.premiered}
              id={show.id}
            />
          )) 
          : "Loading..."}
      </ul>
    );
  }
}
