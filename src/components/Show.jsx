import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withDays from "../HOC/withDaysFromPremiere";
import "./style.css"

class Show extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    officialSite: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    premiered: PropTypes.string.isRequired,

    rating: PropTypes.shape({
      average: PropTypes.number.isRequired,
    }).isRequired,

    image: PropTypes.shape({
      medium: PropTypes.string.isRequired,
      original: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
  };

  render() {
    console.log(this.props.daysFromPremiere);
    return (
      <li>
        <Link to={`/show/${this.props.id}`}>
          <h1>Name: {this.props.name}</h1>
          <img  loading="lazy" src={this.props.image.medium}></img>
        </Link>
        <p>Rating: {this.props.rating.average}</p>
      </li>
    );
  }
}

export default  withDays(Show);