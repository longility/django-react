import React, { Component } from "react";
import { Layout } from "antd";
import BookListContainer from "./BookListContainer";
const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Content>
          <BookListContainer />
        </Content>
      </Layout>
    );
  }
}

export default App;
