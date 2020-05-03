/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "../src/w3.css";
import "react-datepicker/dist/react-datepicker.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homepage";
import Header from "./components/header";
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-Page.jsx";
import {
  auth,
  createUserProfileDocument,
} from "./pages/firebase/firebaseutility";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      const userRef = await createUserProfileDocument(user);
      if (!userRef){ return }
      try {
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: { id: snapShot.id, ...snapShot.data() },
            },
            () => console.log(this.state.currentUser)
          );
        });
      } catch (err) {
        console.log("App -> componentDidMount -> err", err);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  currentUserReset = ()=>{
    this.setState({currentUser: null})
  }
  render() {
    return (
      <div className="w3-container">
        <Header currentUserReset = {this.currentUserReset} currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
