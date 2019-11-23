import React, { Component } from "react";

export default class LikeCounter extends Component {
  state = {
    numLikes: 0,
    style: null
  };

  increment = () => {
    this.setState({
      numLikes: this.state.numLikes + 1,
      style: { color: "red" }
    });
  };

  render() {
    return (
      <div>
        <h3 style={this.state.style} />
        <p>
          This quote has <b>{this.state.numLikes}</b> likes!
          <button id="like" onClick={this.increment}>
            <b>Like</b>
          </button>
        </p>
      </div>
    );
  }
}
