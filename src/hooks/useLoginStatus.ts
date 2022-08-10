import { useReducer, Dispatch } from "react";
import { LoginStatus, Action } from "../types";

function reducer(state: LoginStatus, action: Action) {
  switch (action.type) {
    case "logOut":
      return { isLoggedIn: false };
    case "logIn":
      return { isLoggedIn: true };
    default:
      return state;
  }
}

const initialState: LoginStatus = { isLoggedIn: false };

export default function useLoginStatus(): [LoginStatus, Dispatch<Action>] {
  const [loginStatus, dispatch] = useReducer(reducer, initialState);

  return [loginStatus, dispatch];
}
