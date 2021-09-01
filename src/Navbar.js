import React from 'react'
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router";

const Navbar = () => {
 return (
  <>
   <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
    <div className="container d-flex">
      <div className="contact-info mr-auto">
        <i className="icofont-envelope"></i> <NavLink to="mailto:contact@example.com">contact@example.com</NavLink>
        <i className="icofont-phone"></i> +1 5589 55488 55
        <i className="icofont-google-map"></i> A108 Adam Street, NY
      </div>
      <div className="social-links">
        <NavLink to="#" className="twitter"><i className="icofont-twitter"></i></NavLink>
        <NavLink to="#" className="facebook"><i className="icofont-facebook"></i></NavLink>
        <NavLink to="#" className="instagram"><i className="icofont-instagram"></i></NavLink>
        <NavLink to="#" className="skype"><i className="icofont-skype"></i></NavLink>
        <NavLink to="#" className="linkedin"><i className="icofont-linkedin"></i></NavLink>
      </div>
    </div>
  </div>
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <h1 className="logo mr-auto"><NavLink to="/">Medilab</NavLink></h1>
    
      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="#about">About</NavLink></li>
          <li><NavLink to="#services">Services</NavLink></li>
          {/* <li><NavLink to="#departments">Departments</NavLink></li>
          <li><NavLink to="#doctors">Doctors</NavLink></li>
          <li className="drop-down"><NavLink to="">Drop Down</NavLink>
            <ul>
              <li><NavLink to="#">Drop Down 1</NavLink></li>
              <li className="drop-down"><NavLink to="#">Deep Drop Down</NavLink>
                <ul>
                  <li><NavLink to="#">Deep Drop Down 1</NavLink></li>
                  <li><NavLink to="#">Deep Drop Down 2</NavLink></li>
                  <li><NavLink to="#">Deep Drop Down 3</NavLink></li>
                  <li><NavLink to="#">Deep Drop Down 4</NavLink></li>
                  <li><NavLink to="#">Deep Drop Down 5</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="#">Drop Down 2</NavLink></li>
              <li><NavLink to="#">Drop Down 3</NavLink></li>
              <li><NavLink to="#">Drop Down 4</NavLink></li>
            </ul>
          </li> */}
          <li><NavLink to="#contact">Contact</NavLink></li>

        </ul>
      </nav>

      <NavLink to="#appointment" className="appointment-btn scrollto">Make an Appointment</NavLink>

    </div>
  </header>
  <Switch>
        <Route exact path="/" ></Route>
       
      </Switch>
  </>
 )
}

export default Navbar;
