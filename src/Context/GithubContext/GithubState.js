import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {GET_USERS, SET_LOADING, RESET_LOADING } from "../types";

import { useReducer } from "react";
import axios from "axios";

const GithubState = (props) => {
  const initialState = { loading: false, users: [], user: [], repos: [] };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const getAllusers = async () => {
    try {
      dispatch({ type: SET_LOADING });
      let { data } = await axios.get("https://api.github.com/users");

      dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
      dispatch({ type: RESET_LOADING });
      console.error("Error on Api call", error);
    }
  };

  return (
    <GithubContext.Provider value={{ getAllusers }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
