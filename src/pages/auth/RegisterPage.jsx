import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../utils/network-data";
import useInput from "../../hooks/useInput";

function RegisterPage() {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Password and confirm password do not match!");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      setIsLoading(false);
      return;
    }

    try {
      await register({ name, email, password });
      navigate("/login");
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="register-page">
      <h2>Create New Account</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="input-register" onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          placeholder="Enter your name"
          required
          disabled={isLoading}
        />
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
          placeholder="Enter your password (min. 6 characters)"
          required
          disabled={isLoading}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          placeholder="Confirm your password"
          required
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="arcLink">
          Login here
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
