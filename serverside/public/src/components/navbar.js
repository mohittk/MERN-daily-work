import React from "react";
import '../App.css'
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <nav style={{backgroundColor: "black"}}>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <NavLink class="nav-link active" aria-current="page" to="/" style={{color: "white", textDecoration: "none"}}>
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink class="nav-link" to="/about" style={{color: "white", textDecoration: "none"}}>
              About
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink class="nav-link" to="/contact" style={{color: "white", textDecoration: "none"}}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink class="nav-link" to="/login" style={{color: "white", textDecoration: "none"}}>
              Login
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink class="nav-link" to="/signup" style={{color: "white", textDecoration: "none"}}>
              Registration
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </nav>

    /* <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/about">About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/login">Login</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/signup">Registration</NavLink> */
  );
};

export default Home;
