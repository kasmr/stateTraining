import React, { Component } from 'react';

export default class WorkingClick extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
  }

  getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 11);
    this.setState({ number: randomNumber });
    console.log(randomNumber);
  };

  render() {
    return (
      <div>
        <h1>Number is {this.state.number}</h1>
        {this.state.number === 7 ? (
          'You win!'
        ) : (
          <button onClick={this.getRandomNumber}>Get random number</button>
        )}
      </div>
    );
  }
}
