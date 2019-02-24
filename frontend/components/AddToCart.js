import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

class AddToCart extends Component {
  render() {
    const { id } = this.props;
    return (
      <Mutation mutation={ADD_TO_CART_MUTATION} variables={{ id: id }}>
        {addToCart => <button onClick={addToCart}>Add to cart</button>}
      </Mutation>
    );
  }
}

export default AddToCart;
