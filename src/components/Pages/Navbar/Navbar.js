import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { downloadAPK } from "../../Helpers/DownloadAPK";
const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapseRef = useRef(null);

  // const toggleNavbar = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  const handleClickOutside = (event) => {
    if (collapseRef.current && !collapseRef.current.contains(event.target)) {
      setIsCollapsed(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="app-container">
        <div className="banner-section ">
          <div className="header-container">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Logo />
                <button
                  class="navbar-toggler navbar-toggler-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                {/* Conditionally render NavigationLinks and DownloadButton based on isCollapsed state */}
                <div
                  className={`collapse navbar-collapse custome-nav  ${
                    isCollapsed ? "" : "show"
                  }`}
                  id="navbarSupportedContent"
                  ref={collapseRef}
                >
                        <div className="navigation-links">
                   {/* <NavigationLinks /> */}
                  </div>
                  
                   <div className="navigation-links">
                   <NavigationLinks />
                  </div>
                  
                  <div className="download-btn ">
                    <DownloadButton />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

const Logo = () => {
  return (
    <Link className="nav-link  active" aria-current="page" to="/">
      <img
        className="logo_navbar"
        src="/images/0000.png"
        alt="Logo"
        style={{ width: "10rem", padding: "8px" }}
      />
    </Link>
  );
};

const NavigationLinks = () => {
  return (
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/charts">
          Charts
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/terms-conditions">
         Terms & Condition
        </Link>
      </li>

      
    </ul>
  );
};

const download = async () => {
  await downloadAPK();
};

const DownloadButton = () => {
  return (
    <button onClick={download}>
      Get Free App <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </button>
  );
};

export default Navbar;
