import { SET_PAGES, SET_PAGE_REPO, SET_CURR_PAGE } from "../types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PAGES:
      return { ...state, pages: payload.pages };
    case SET_PAGE_REPO:
      return { ...state, pageRepos: payload.pageRepos };
    case SET_CURR_PAGE:
      return { ...state, currPage: payload.currPage };
    default:
      return state;
  }
};

export default reducer;
