import { useReducer } from "react";
import {SET_PAGES,SET_PAGE_REPO,SET_CURR_PAGE} from "../types"
import PaginationContext from "./PaginationContext";
import PaginationReducer from "./PaginationReducer";

const PaginationState = (props) => {
  const initialState = { pageRepos: [], currPage: 1, pages: 0 };
  const [state, dispatch] = useReducer(PaginationReducer, initialState);

  const calcPages = (arr, perPage) => {
    let pages = Math.ceil(arr.length / perPage);
    dispatch({type:SET_PAGES,payload:{pages:pages}})
  };

  const changePageRepo = (data) =>{
      dispatch({type:SET_PAGE_REPO,payload:{pageRepos:data}})
  }

  const changeCurrPage = (data) =>{
      dispatch({type:SET_CURR_PAGE,payload:{currPage:data}})
  }


  return (
    <PaginationContext.Provider value={{ ...state ,calcPages , changeCurrPage,changePageRepo}}>
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationState
