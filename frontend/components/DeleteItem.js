import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_ITEMS_QUERY } from "./Items";

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

class DeleteItem extends Component {
  update = (cache, payload) => {
    //manually update the cache on the cliente so it matches the server
    // 1.Read te che for the items we want
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    // 2. filter deleted item of the page
    console.log(data, payload);
    data.items = data.items.filter(
      item => item.id !== payload.data.deleteItem.id
    );
    // 3. put the items back
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteItem, { error }) => {
          return (
            <button
              onClick={() => {
                if (confirm("Are you sure to delete item?")) {
                  deleteItem().catch(err => alert(err.message));
                }
              }}
            >
              delete
            </button>
          );
        }}
      </Mutation>
    );
  }
}

export default DeleteItem;
