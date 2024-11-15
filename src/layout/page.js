import React from "react";
import Pagination from "./pagination";

function Page(props) {
  return (
    <div className="page">
      {props.children}
      <Pagination
        pageNumber={props.pageNumber}
        groupNumber={props.groupNumber}
      />
    </div>
  );
}

export default Page;
