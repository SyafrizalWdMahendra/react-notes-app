import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { login } from "../../utils/network-data";
import useInput from "../../hooks/useInput";

function LoginPage({ onLogin }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const accessToken = await login({ email, password });
      onLogin(accessToken);
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login-page">
      <h2>Login to Your Account</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="input-login" onSubmit={onSubmitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Enter your email"
          required
          disabled={isLoading}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Enter your password"
          required
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      <p>
        Don&apos;t have an account?{" "}
        <Link to="/register" className="arcLink">
          Register here
        </Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
