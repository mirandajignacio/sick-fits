import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import Error from "./ErrorMessage";

const SingleItemStyle = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
`;

const SINGLE_ITME_QUERY = gql`
  query SINGLE_ITME_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;
class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITME_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No item found for {this.props.id}</p>;
          console.log(data);
          const item = data.item;
          return (
            <SingleItemStyle>
              <img src={item.largeImage} alt={item.title} />
            </SingleItemStyle>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
