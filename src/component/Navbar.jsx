import React from "react";
import { Link, NavLink } from "react-router-dom";

 
const Navbar =()=>{
    return(
     <>
     <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-lg-10 mx-auto">
            <nav class="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="../">React Project</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="../">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="../Service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="../About">About</NavLink>
        </li>
            <li className="nav-item">
          <NavLink className="nav-link " to="../Contact">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div>
     </>
    )
}

export default Navbar;