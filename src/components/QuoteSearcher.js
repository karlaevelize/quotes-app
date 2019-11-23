import React, { Component } from "react";
import Quote from "./Quote";
import loading from "../loading.gif";

class QuoteSearcher extends Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(res => res.json())
      .then(data => this.updateQuotes(data.results))
      .catch(console.error);
  }

  updateQuotes = results => {
    this.setState({
      ...this.state,
      quotes: this.state.quotes.concat(results),
      fetching: true
    });
  };

  render() {
    return (
      <div className="quoteseacher">
        <h1>Quotes</h1>
        <br />
        {!this.state.fetching && <img src={loading} alt={loading} />}
        {this.state.fetching &&
          this.state.quotes.map(quote => (
            <Quote
              quoteText={quote.quoteText}
              quoteAuthor={quote.quoteAuthor}
              key={quote._id}
            />
          ))}
      </div>
    );
  }
}

export default QuoteSearcher;
