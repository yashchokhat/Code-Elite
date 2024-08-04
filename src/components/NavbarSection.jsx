import React from 'react';
import { BsTerminal } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { FiYoutube } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaRegMessage } from "react-icons/fa6";

function NavbarSection({ onContactClick }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black border-bottom fixed-top" >
        <div className="container-fluid">
          <a href="/" className="navbar-brand text-info fs-4">
            <BsTerminal /> CodeElite <FaTerminal />
          </a>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fs-4 text-primary" aria-current="page" href="#"><FaHome /> Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-primary" href="#"><MdDashboardCustomize /> Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-primary" href="#"><GoProjectSymlink /> Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-primary" href="#"><FiYoutube /> Content</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-primary" href="#"><CgProfile /> About</a>
              </li>
            </ul>
            <div className="d-flex">
              <button type="button" className="btn btn-primary" onClick={onContactClick}>Contact Us <FaRegMessage /></button>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ height: '10vh' }}></div>
    </>
  );
}

export default NavbarSection;
