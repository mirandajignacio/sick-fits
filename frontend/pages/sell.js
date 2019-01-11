import React, { Component } from "react";
import Link from "next/link";

class Sell extends Component {
  render() {
    return (
      <Link href="/">
        <a>
          <p>Go to home</p>
        </a>
      </Link>
    );
  }
}

export default Sell;
