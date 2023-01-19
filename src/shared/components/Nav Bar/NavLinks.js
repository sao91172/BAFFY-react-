import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';


// import { AuthContext } from '../../context/auth-context';


// import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';
const NavLinks = props => {
    return (
<ul className ="nav-links">
<li>
  <NavLink className= "Button" to="/">HOME
  </NavLink>
</li>
{/*
{/* {auth.isLoggedIn && ( */}
        <li>
          <NavLink className= "Button" to="/wishlist">PINNED FITS</NavLink>
        </li>
      {/* )} */}
      {/* {auth.isLoggedIn && ( */}
        <li>
          <NavLink className= "Button" to="/newoutfit">NEW OUTFIT</NavLink>
        </li>
      {/* )} */}
      {/* {!auth.isLoggedIn && ( */}
        <li>
          <NavLink className= "Button" to="/login">SIGN IN</NavLink>
        </li>
      {/* )} */}
      {/* {auth.isLoggedIn && ( */}
        {/* <li> */}
          {/* <button onClick={auth.logout}>LOGOUT</button> */}
        {/* </li> */}
      {/* )} */}
      
</ul>
);
};
export default NavLinks;
