import React from "react";
import "./index.css";
import {Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="sticky">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">RDX CV Maker</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/previewcv1" >Preview</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="cv1" >Template</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item mr3">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;