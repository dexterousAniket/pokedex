import React from "react";
import SearchBox from "../atoms/SearchBox";
import FilterBox from "../atoms/FilterBox";

export default function SearchBar() {
  return (
    <div className="flex py-2 space-x-2">
      <SearchBox />
      <FilterBox />
    </div>
  );
}
