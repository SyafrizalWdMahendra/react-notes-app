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
      <h3>
        <Link to="/archived" className="arcLink">
          Archived
        </Link>
      </h3>
    </header>
  );
}

export default Navbar;
