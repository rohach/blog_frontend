import React from 'react';
import './search_style.css';
import search from '../../assets/images/search.png';

const Search = () => {
  return (
    <div className="search">
      <div className="searchBar">
        <input
          id="searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder="Search"
        />
        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
          <img src={search} alt="search" />
        </button>
      </div>
      <div className="topics">
        <h6 style={{ color: 'grey' }}>My Topics : </h6>
        <div className="topics_detail">
          <h6>Design</h6>
          <h6>Web Development</h6>
          <h6>React JS</h6>
        </div>
      </div>
    </div>
  );
};

export default Search;
