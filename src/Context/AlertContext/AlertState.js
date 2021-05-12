import { ALERT, RESET_ALERT } from "../types";

import { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

const AlertState = (props) => {
  const initialState = { alert: null };
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const handleAlert = (msg, type) => {
    dispatch({ type: ALERT, payload: { msg: msg, type: type } });
    setTimeout(() => {
      dispatch({ type: RESET_ALERT });
    }, 5000);
  };

  return (
    <AlertContext.Provider value={{ ...state, handleAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
