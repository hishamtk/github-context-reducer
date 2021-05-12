import { SET_PAGES } from "../types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PAGES:
      return { ...state, pages: payload.pages };
    default:
      return state;
  }
};

export default reducer;
