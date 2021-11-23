import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';



const Home = () => {

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink class="navbar-brand" href="#">Navbar</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" href="/">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" href="/about">About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" href="/contact">Contact</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" href="/login">Login</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" href="/registration">Registration</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )

}

export default Home;