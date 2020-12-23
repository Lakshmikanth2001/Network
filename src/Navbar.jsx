import React from "react";
import Data from "./data.js";

const top_2 = Data.slice(0, 2);
const rest = Data.slice(2);

function NavItem(element) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={"#" + element.title}>
        {element.title}
      </a>
    </li>
  );
}

function DropdownItems(element) {
  return (
    <a className="dropdown-item" href={"#" + element.title}>
      {element.title}
    </a>
  );
}

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        Network
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {top_2.map(NavItem)}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {rest.map(DropdownItems)}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
