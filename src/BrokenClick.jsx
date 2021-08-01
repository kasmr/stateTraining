import React, { Component } from 'react';

export default class BrokenClick extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = (e) => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'Clicked !!!' : 'Not clicked!'}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
