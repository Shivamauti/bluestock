import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional for custom styles
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src="/images/logo.png" // ✅ path to your logo image
          alt="Logo"
          style={{ height: '30px', marginRight: '10px' }} // adjust as needed
        />
        <span style={{ fontWeight: 'bold', fontSize: '35px' }}>BLUESTOCK</span>
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/community">Community</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
