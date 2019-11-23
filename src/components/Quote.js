import React, { Component } from "react";
import LikeCounter from "./LikeCounter";
import DislikeCounter from "./DislikeCounter";

// Create a component Quote, that takes two props (the quote text and the quote author),
// and displays them.  Show the quote first, and then the author, prepended by “By:”

class Quote extends Component {
  render() {
    return (
      <div className="quotes">
        <h3 style={this.props.style} className="quoteText">
          {this.props.quoteText}
        </h3>
        <p className="quoteAuthor">By: {this.props.quoteAuthor}</p>
        <LikeCounter />
        <DislikeCounter />
      </div>
    );
  }
}

export default Quote;
