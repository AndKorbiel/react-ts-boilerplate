import React, { Dispatch } from "react";
import { Action, LoginStatus } from "../types";
import { SpecialOffer } from "./SpecialOffer";

interface Props {
  loginStatus: LoginStatus;
  dispatch: Dispatch<Action>;
}

function TopBar({ loginStatus, dispatch }: Props): JSX.Element {
  const { isLoggedIn } = loginStatus;
  const actionType = isLoggedIn ? "logOut" : "logIn";

  return (
    <div className="topbar">
      You are: {isLoggedIn ? "logged in" : "logged out"}
      <button onClick={() => dispatch({ type: actionType })}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
      <SpecialOffer />
    </div>
  );
}

export default TopBar;
