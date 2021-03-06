import React from "react";
import popcorn from '../images/popcorn.png'

function SearchBar(props) {
  return (
    <div>
    
    <header>
    <img className="popcorn" src={popcorn}></img>
    <h1>Movies</h1>
      <input
        className="search-bar"
        type="text"
        value={props.value}
        placeholder="Type to Search"
        onChange={(event)=> props.setSearchValue(event.target.value)}
      ></input>
      </header>
    </div>
  );
}

export default SearchBar;
