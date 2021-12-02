import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';



const Home = () => {

  return (
    <nav>
    <div class="nav-wrapper">
     
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink></li>
        <li>   <NavLink class="nav-link" to="/about">About</NavLink></li>
        <li> <NavLink class="nav-link" to="/contact">Contact</NavLink></li>
        <li><NavLink class="nav-link" to="/login">Login</NavLink></li>
       <li> <NavLink class="nav-link" to="/signup">Registration</NavLink> </li>
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
               
          
  )

}

export default Home;