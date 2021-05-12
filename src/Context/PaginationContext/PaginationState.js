import { useReducer } from "react";
import {SET_PAGES} from "../types"
import PaginationContext from "./PaginationContext";
import PaginationReducer from "./PaginationReducer";

const PaginationState = (props) => {
  const perPage = 5;
  const initialState = { pageRepos: [], currPage: 1, pages: 0 };
  const [state, dispatch] = useReducer(PaginationReducer, initialState);

  const calcPages = (arr, perPage) => {
    let pages = Math.ceil(arr.length / perPage);
    dispatch({type:SET_PAGES,payload:{pages:pages}})
  };



  return (
    <PaginationContext.Provider value={{ ...state ,calcPages ,}}>
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationState
