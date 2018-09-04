import React, { PureComponent } from "react";
import { Select } from "antd";
const { Option } = Select;

export default class BookListContainer extends PureComponent {
  state = { books: [] };

  componentDidMount() {
    fetch("api/books").then(response => {
      response.json().then(books => {
        this.setState({ books: books });
      });
    });
  }

  render() {
    return (
      <Select style={{ width: "200px" }}>
        {this.state.books.map(b => (
          <Option key={b}>{b}</Option>
        ))}
      </Select>
    );
  }
}
