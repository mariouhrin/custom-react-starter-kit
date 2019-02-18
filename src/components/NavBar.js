import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => (
  <div className="pure-menu pure-menu-horizontal">
    <ul className="pure-menu-list" style={{ display: 'flex' }}>
      <NavLink style={{ marginRight: '20%' }} to="/">
        <li className="pure-menu-item">
          <p className="pure-menu-link">Home</p>
        </li>
      </NavLink>
      <NavLink to="/demo1">
        <li className="pure-menu-item">
          <p className="pure-menu-link">Demo 1</p>
        </li>
      </NavLink>
      <NavLink to="/demo2">
        <li className="pure-menu-item">
          <p className="pure-menu-link">Demo 2</p>
        </li>
      </NavLink>
      <NavLink to="/demo3">
        <li className="pure-menu-item">
          <p className="pure-menu-link">Demo 3</p>
        </li>
      </NavLink>
      <NavLink to="/demo4">
        <li className="pure-menu-item">
          <p className="pure-menu-link">Demo 4</p>
        </li>
      </NavLink>
    </ul>
  </div>
);
