import React, { Component } from "react";
import LikeCounter from "./LikeCounter";
import DislikeCounter from "./DislikeCounter";

class Quote extends Component {
  state = {
    style: null
  };

  heart = () => {
    this.setState({
      ...this.state,
      style: { color: "green" }
    });
  };

  brokenHeart = () => {
    this.setState({
      ...this.state,
      style: { color: "red" }
    });
  };

  render() {
    return (
      <div className="quotes">
        <h3 style={this.state.style} className="quoteText">
          "{this.props.quoteText}"
        </h3>
        <p className="quoteAuthor">By: {this.props.quoteAuthor}</p>
        <LikeCounter />
        <DislikeCounter />
        <button onClick={this.heart}>
          <img
            id="heart"
            src="https://media.giphy.com/media/5AETEpGyTqxO/giphy.gif"
          />
        </button>
        <p />
        <button onClick={this.brokenHeart}>
          <img
            id="heart"
            src="https://media.tenor.com/images/35a546c16f1bc052581682512c9c4207/tenor.gif"
          />{" "}
        </button>
      </div>
    );
  }
}

export default Quote;
