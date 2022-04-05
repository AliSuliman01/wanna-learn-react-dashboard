import React from "react";

export const SearchBox = ({search}) => {
  return (
    <div className="search-box p-2 ">
      <input type="search" className="form-control" onChange={(event) => search(event.target.value)}/>
    </div>
  );
};
