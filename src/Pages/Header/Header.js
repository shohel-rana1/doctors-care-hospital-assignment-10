import React from 'react';
import './Header.css'
import logo from '../../images/logo/download.jpg';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className="container mb-2">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-4 col-md-4-col-sm-12">
                        <a href="https://www.asgaralihospital.com/" target="_blank" rel="noopener noreferrer">
                            <img style={{ width: '200px', height: '100px' }} src={logo} alt="Doctors Care Hospital" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4-col-sm-12">
                        <form className="d-flex">
                            <input className="form-control me-2 border" type="search" placeholder="Search For Consultants And Services" aria-label="Search" />
                            <button className="btn btn-outline-success btn-bg" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light navColor">
                <div className="container">
                    <NavLink className="navbar-brand" to="/home"><img className="logo" src={logo} alt="" /><span className="logo-text">DoctorsCare</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <i class="fas fa-clinic-medical"></i>
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <i className="fas fa-users"></i>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <i class="fab fa-elementor"></i>
                                <NavLink className="nav-link" to="/departments">Departments</NavLink>
                            </li>
                            <li className="nav-item">
                                <i class="fas fa-user-md"></i>
                                <NavLink className="nav-link" to="/consultants">Consultants</NavLink>
                            </li>
                            <li className="nav-item">
                                <i class="fas fa-address-card"></i>
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <i class="fas fa-sign-in-alt"></i>
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Banner part */}

            <div className="banner">
                <div className="text-center container">
                    <h1>
                        Welcome To <br />
                        <span>Doctors Care Hospitals</span>
                    </h1>
                    <p>
                        Doctors Care Hospital is directed maintained by some specilized doctors . That's why we named it <br /> Doctors Care Hospital.It is situated at Banani, Dhaka.It started its journey back in 2009, <br /> it has grown-up as one of the largest Industrial  Commercial Icons.
                    </p>
                </div>
            </div>

        </>
    );
};

export default Header;