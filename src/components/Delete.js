import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    items: [...Array(50)].map((n, i) => i + 1),
    numShow: 10,
  }

  onScroll = (e) => {
    if (e.target.offsetHeight + e.target.scrollTop === e.target.scrollHeight) {
      this.setState(({ items, numShow }) => ({
        numShow: Math.min(numShow + 10, items.length),
      }));
    }
  }

  render() {
    const { items, numShow } = this.state;

    return (
      <div className="item-list" onScroll={this.onScroll}>
        {items.slice(0, numShow).map(n => <div className="item">{n}</div>)}
      </div>
    );
  }
}

export default App;