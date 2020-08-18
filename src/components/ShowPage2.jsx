import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getShow } from "../api/show";
import Show2 from "./Show2";


class ShowPage2 extends Component {
  state = {
    show2: null,
  };
  async componentDidMount() {
    const show2 = await getShow(this.props.match.params.id);
    this.setState({ show2 });
  }

  render() {
    console.log(this.props.daysFromPremiere);
    return this.state.show2 ? <Show2 {...this.state.show2}></Show2> : "Loading...";
  }
}

export default withRouter(ShowPage2);
