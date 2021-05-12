import {ALERT,RESET_ALERT} from "../types"

const reducer = (state, action) => {
  switch (action.type) {
    case ALERT:
      return { alert: action.payload };
    case RESET_ALERT:
      return { alert: null };
    default:
      return state;
  }
};

export default reducer;
