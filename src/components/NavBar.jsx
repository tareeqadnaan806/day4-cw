import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Plans from "./Plans";
import Enterprise from "./Enterprise";
import Resources from "./Resources";
import Education from "./Education";
import Platform from "./Platform";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.kdkawlPiOpOsCTSEtRR-0AHaEK&pid=Api&P=0&h=180"
          alt="logo"
          className="navbar-logo"
        />
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/platform" element={<Platform />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/education" element={<Education />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default NavBar;
