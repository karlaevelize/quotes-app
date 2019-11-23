import React, { Component } from "react";

export default class DislikeCounter extends Component {
  state = {
    numDislikes: 0
  };

  increment = () => {
    this.setState({
      numDislikes: this.state.numDislikes + 1
    });
  };

  render() {
    return (
      <div>
        <p>
          This quote has <b>{this.state.numDislikes}</b> dislikes!
          <button onClick={this.increment}>
            <b>Dislike</b>
          </button>
        </p>
      </div>
    );
  }
}
