import React from 'react';

const NavBar = () => (
  <div className="pure-menu pure-menu-horizontal">
    <p className="pure-menu-heading pure-menu-link">BRAND</p>
    <ul className="pure-menu-list">
      <li className="pure-menu-item">
        <p className="pure-menu-link">News</p>
      </li>
      <li className="pure-menu-item">
        <p className="pure-menu-link">Sports</p>
      </li>
      <li className="pure-menu-item">
        <p className="pure-menu-link">Finance</p>
      </li>
    </ul>
  </div>
);

export default NavBar;
