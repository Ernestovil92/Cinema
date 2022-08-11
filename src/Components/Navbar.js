import React,{ Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Image from 'react-bootstrap/Image';

const Navbar = () => {

  return(
    <Fragment>
    <nav className="navbar navbar-expand-lg" style={{background:'#4C3A51'}}>
    <div className="container-fluid">
    <NavLink className="navbar-brand" to="Home">
    <img style={{width: '50px', heigth:'50px'}} src="https://assets.turbologo.com/blog/es/2018/03/19133334/prozrachniy-logo-1-800x575.png"/>
    </NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
 <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink  aria-current="page" to="Home">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="Cines">Front-End</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="CinesItauSol">Back-End</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="Contact" >Otros</NavLink>
        </li>

      </ul>

      <ul className="navbar-nav ms-auto">
             <li className="nav-item">
               <NavLink className="nav-link " to="Loggin" >Iniciar Sesion</NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link " to="Register">Registrarse</NavLink>
             </li>
           </ul>

    </div>
  </div>
</nav>

<ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><hr className="dropdown-divider" /></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Disabled</a>
  </li>
</ul>
</Fragment>
  )
}
export default Navbar
