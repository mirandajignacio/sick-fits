import React, { Component } from "react";
import SingleItem from "../components/SingleItem";
import gql from "graphql-tag";

class Item extends Component {
  render() {
    return (
      <div>
        <SingleItem id={this.props.query.id} />
      </div>
    );
  }
}

export default Item;
