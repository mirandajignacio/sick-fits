import React, { Component } from "react";
import PleaseSignin from "../components/PleaseSignin";
import Permissions from "../components/Permissions";

class PermissionsPage extends Component {
  render() {
    return (
      <div>
        <PleaseSignin>
          <Permissions />
        </PleaseSignin>
      </div>
    );
  }
}

export default PermissionsPage;
