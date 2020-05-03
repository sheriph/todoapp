import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../pages/firebase/firebaseutility";

const Header = ({ currentUser, currentUserReset }) => (
  <div className="w3-bar w3-border w3-green w3-xlarge">
    <Link to="/" className="w3-bar-item w3-button">
      HOME
    </Link>
    {!currentUser ? (
      <Link to="/signin" className="w3-bar-item w3-button">
        SIGN IN
      </Link>
    ) : (
      <Link
        onClick={(e) => {
          currentUserReset();
          auth.signOut();
        }}
        to="/signin"
        className="w3-bar-item w3-button"
      >
        SIGN OUT
      </Link>
    )}

    {!currentUser ? (
      ""
    ) : (
      <div className="bigspan w3-right">
        Welcome {currentUser.displayName}
      </div>
    )}
  </div>
);

export default Header;
