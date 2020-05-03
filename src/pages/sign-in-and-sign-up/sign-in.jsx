import React from "react";
import { auth, signInWithGoogle } from "../firebase/firebaseutility.js";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSignInChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSignInSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log("SignIn -> handleSignInSubmit -> err", err);
    }
  };

  handleSignInSubmitWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="w3-container">
        <div className="w3-container w3-teal">
          <h2>Sign In with your email and password</h2>
        </div>
        <form className="w3-container">
          <label className="w3-text-teal">
            <b>Email</b>
          </label>
          <input
            className="w3-input w3-border w3-light-grey"
            type="email"
            name="email"
            value={email}
            onChange={this.handleSignInChange}
          />

          <label className="w3-text-teal">
            <b>Password</b>
          </label>
          <input
            className="w3-input w3-border w3-light-grey"
            type="password"
            value={password}
            name="password"
            onChange={this.handleSignInChange}
          />

          <button
            className="w3-btn w3-blue-grey w3-margin-top"
            onClick={this.handleSignInSubmit}
          >
            Login
          </button>
          <button
            className="w3-btn w3-blue w3-margin-top w3-margin-left"
            onClick={this.handleSignInSubmitWithGoogle}
          >
            Sign in with GOOGLE
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
