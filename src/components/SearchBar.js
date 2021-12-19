import React from "react";

function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        placeholder="Type to Search"
        onChange={(event)=> props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
}

export default SearchBar;
