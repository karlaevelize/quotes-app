import React, { Component } from "react";
import Quote from "./Quote";
import loading from "../loading.gif";

class QuoteSearcher extends Component {
  state = {
    quotes: [],
    keyword: ""
  };

  // componentDidMount() {
  //   fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
  //     .then(res => res.json())
  //     .then(data => this.updateQuotes(data.results))
  //     .catch(console.error);
  // }

  search(keyword) {
    fetch(
      "https://quote-garden.herokuapp.com/quotes/search/${encodeURIComponent(keyword)}"
    )
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
        <p>
          Welcome to my quotes app! Here you can like or dislike a quote. You
          can also mark it as favorite by clicking on the heart, or mark it as a
          very bad one by clicking on the broken heart. And don`t forget to
          search for keywords, this way you can find the quotes you are more
          interested in. Have fun!
        </p>
        <form>
          <input type="text" name="search" />
          <input type="submit" value="Search" />
        </form>
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
