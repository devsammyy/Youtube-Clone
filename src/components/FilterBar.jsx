import React from "react";
import "../styles/filterbar.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterBar = () => {
  return (
    <section id="filterBar">
      <div className="arrow">
        <FontAwesomeIcon icon={"fa fa-angle-left"} size={"3x"} />
      </div>
      <div className="filter-items">
        <h3>All</h3>
        <h3>Practice</h3>
        <h3>Computer Programming</h3>
        <h3>Live</h3>
        <h3>Sonatas</h3>
        <h3>Sports</h3>
        <h3>Comedy</h3>
        <h3>Editing</h3>
        <h3>Recently uploaded</h3>
        <h3>Watched</h3>
        <h3>New to you</h3>
      </div>

      <div className="arrow-left">
        <FontAwesomeIcon icon={"fa fa-angle-right"} size={"3x"} />
      </div>
    </section>
  );
};

export default FilterBar;
