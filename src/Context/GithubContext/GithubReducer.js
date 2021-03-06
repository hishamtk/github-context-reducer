import { GET_USERS, GET_USER_REPO, SET_LOADING, RESET_LOADING } from "../types";

const reducer = (state, action) => {

  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case RESET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_USERS:
      const { users } = action.payload;
     
      return {
        ...state,
        loading: false,
        users: users,
      };
    case GET_USER_REPO:
      const { repos, user } = action.payload;
      return {
        ...state,
        repos: repos,
        user: user,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
