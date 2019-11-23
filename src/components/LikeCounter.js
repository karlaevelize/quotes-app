import React, { Component } from "react";

export default class LikeCounter extends Component {
  state = {
    numLikes: 0
  };

  increment = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };

  render() {
    return (
      <div>
        <p>
          This quote has <b>{this.state.numLikes}</b> likes!
          <button onClick={this.increment}>
            <b>Like</b>
          </button>
        </p>
      </div>
    );
  }
}
