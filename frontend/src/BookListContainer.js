import React, { PureComponent } from "react";

export default class BookListContainer extends PureComponent {
  state = { books: [] };

  componentDidMount() {
    fetch("api/books").then(response => {
      response.json().then(books => {
        console.log();
        this.setState({ books: books });
      });
    });
  }

  render() {
    return (
      <select>
        {this.state.books.map(b => (
          <option key={b}>{b}</option>
        ))}
      </select>
    );
  }
}
