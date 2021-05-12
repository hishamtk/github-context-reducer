import Pagination from "@material-ui/lab/Pagination";
import { useContext } from "react";

import PaginationContext from "../../Context/PaginationContext/PaginationContext";

const PaginationDiv = () => {
  const pageContext = useContext(PaginationContext);

  const handleChange = (event, value) => {
    pageContext.changeCurrPage(value);
  };

  return (
    <Pagination
      count={pageContext.pages}
      page={pageContext.currPage}
      onChange={handleChange}
    />
  );
};

export default PaginationDiv;
