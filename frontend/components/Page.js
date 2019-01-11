import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
        <p>Can i be the footer? :D</p>
      </div>
    );
  }
}

export default Page;
