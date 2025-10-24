import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1>
        <Link to="/" className="appTitle">
          Notes App
        </Link>
      </h1>
    </header>
  );
}

export default Navbar;
