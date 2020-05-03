import React from "react";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

class SignInSignUp extends React.Component {


  render() {
    return (
      <div className="w3-container">
        
        <SignIn />

        <hr />

        <SignUp />

      </div>
    );
  }
}

export default SignInSignUp;
