import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withDays from "../HOC/withDaysFromPremiere";


class Show2 extends Component {
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
      <li style={{width: '35%'}}>
        <Link to={`/show/${this.props.id}`}>
          <h1 style={{fontSize: '2.5vw'}}>Name: {this.props.name}</h1>
          <p className="site" style={{fontSize: '1vw'}}> OfficialSite: <br></br> {this.props.officialSite}</p>
          <img  loading="lazy" src={this.props.image.original}></img>
        </Link>
        <p style={{fontSize: '2vw'}}>{this.props.language}</p>
        <p style={{fontSize: '2vw'}}>Rating: {this.props.rating.average}</p>
        <p style={{fontSize: '2vw'}}>{this.props.premiered}</p>
        <p style={{fontSize: '2vw'}}>days from premier: {this.props.daysFromPremiere}</p>
      </li>
    );
  }
}

export default  withDays(Show2);