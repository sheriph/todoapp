import React from "react";
import { auth, createUserProfileDocument } from "../firebase/firebaseutility";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      displayName: "",
    };
  }

  handleSignUpChange = (e)=>{
     const {value,name} = e.target;
     this.setState({[name]: value})

  }

  handleSignUpSubmit = async (e) =>{
      e.preventDefault();
      const { email, password, displayName } = this.state;

      try {
        const {user} = await auth.createUserWithEmailAndPassword(email,password);

      await createUserProfileDocument(user, {displayName})
      this.setState({
        email: "",
        password: "",
        dispayName: "",
      })

      }catch (err){
      console.log("SignUp -> handleSignUpSubmit -> err", err)
          
      }

  }


  render() {
    const { email, password, displayName } = this.state;
    return (
      <div>
        <div className="w3-container w3-teal">
          <h2>Sign Up</h2>
        </div>
        <form className="w3-container" onClick = {this.handleSignUpSubmit}>
          <label className="w3-text-teal">
            <b>Email</b>
          </label>
          <input
            className="w3-input w3-border w3-light-grey"
            type="email"
            name="email"
            value={email}
            onChange={this.handleSignUpChange}
          />

          <label className="w3-text-teal">
            <b>Password</b>
          </label>
          <input
            className="w3-input w3-border w3-light-grey"
            type="password"
            value={password}
            name="password"
            onChange={this.handleSignUpChange}
          />
          <label className="w3-text-teal">
            <b>Full Name</b>
          </label>
          <input
            className="w3-input w3-border w3-light-grey"
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleSignUpChange}
          />

          <button className="w3-btn w3-blue-grey">Sign Up</button>
        </form>
      </div>
    );
  }
}


export default SignUp;