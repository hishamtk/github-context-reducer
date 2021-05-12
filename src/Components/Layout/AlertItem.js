import React, { useContext } from "react";
import { Alert } from "@material-ui/lab";
import AlertContext from "../../Context/AlertContext/AlertContext";

const AlertItem = () => {

  const alertContext = useContext(AlertContext);

  return (
    alertContext.alert && (
      <Alert variant="filled" severity={alertContext.alert.type}>
        {alertContext.alert.msg}
      </Alert>
    )
  );
};

export default AlertItem;
