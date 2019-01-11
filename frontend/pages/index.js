import React, { Component } from "react";
import Link from "next/link";

class Home extends Component {
  render() {
    return (
      <Link href="/sell">
        <a>
          <p>Go to sell</p>
        </a>
      </Link>
    );
  }
}

export default Home;
