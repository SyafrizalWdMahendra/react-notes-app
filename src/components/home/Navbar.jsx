import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/ThemeContext";

function Navbar({ authedUser, onLogout }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>
        <Link to="/" className="appTitle">
          Notes App
        </Link>
      </h1>
      <div className="navigation">
        <button
          className="toggle-theme"
          onClick={toggleTheme}
          title="Toggle Theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        {authedUser && (
          <>
            <button className="button-logout" onClick={onLogout} title="Logout">
              <span>{authedUser.name}</span>
              <span>🚪</span>
            </button>
          </>
        )}
      </div>
    </header>
  );
}

Navbar.propTypes = {
  authedUser: PropTypes.object,
  onLogout: PropTypes.func,
};

export default Navbar;
