import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getShow } from "../api/show";
import Show from "./Show";


class ShowPage extends Component {
  state = {
    show: null,
  };
  async componentDidMount() {
    const show = await getShow(this.props.match.params.id);
    this.setState({ show });
  }

  render() {
    console.log(this.props.daysFromPremiere);
    return this.state.show ? <Show {...this.state.show}></Show> : "Loading...";
  }
}

export default withRouter(ShowPage);
