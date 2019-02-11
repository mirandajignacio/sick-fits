import React, { Component } from "react";
import CreateItem from "../components/CreateItem";
import PleaseSignin from "../components/PleaseSignin";

class Sell extends Component {
  render() {
    return (
      <div>
        <PleaseSignin>
          <CreateItem />
        </PleaseSignin>
      </div>
    );
  }
}

export default Sell;
