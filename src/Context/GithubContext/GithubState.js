import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import { GET_USERS, SET_LOADING, RESET_LOADING, GET_USER_REPO } from "../types";

import { useReducer } from "react";
import axios from "axios";

const GithubState = (props) => {
  const initialState = { loading: false, users: [], user: [], repos: [] };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const getAllusers = async () => {
    try {
      dispatch({ type: SET_LOADING });
      let { data } = await axios.get("https://api.github.com/users");

      dispatch({ type: GET_USERS, payload: { users: data } });
    } catch (error) {
      dispatch({ type: RESET_LOADING });
      console.error("Error on Api call", error);
    }
  };

  const getUserAndRepo = async (user) => {
    try {
      dispatch({ type: SET_LOADING });

      let { data } = await axios.get(`https://api.github.com/users/${user}`);

      let res = await axios.get(`https://api.github.com/users/${user}/repos`);
      dispatch({
        type: GET_USER_REPO,
        payload: {
          user: data,
          repos: res.data,
        },
      });
    } catch (error) {
      dispatch({ type: RESET_LOADING });
      console.log(error);
    }
  };

  const searchUsers = async (text) => {
    try {
      //   if (text === "") {
      //     return handleAlert("Search should not be empty", "error");
      //   }

      dispatch({ type: SET_LOADING });
      let { data } = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      dispatch({ type: GET_USERS, payload: { users: data.items } });
    } catch (error) {
      dispatch({ type: RESET_LOADING });
      console.error(error);
    }
  };

  return (
    <GithubContext.Provider
      value={{ ...state, getAllusers, getUserAndRepo, searchUsers }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
