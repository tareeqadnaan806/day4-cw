import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <Link to="/" className="link">
          About
        </Link>
        <Link to="/platform" className="link">
          Platform
        </Link>
        <Link to="/plans" className="link">
          Plans
        </Link>
        <Link to="/enterprise" className="link">
          Enterprise
        </Link>
        <Link to="/resources" className="link">
          Resources
        </Link>
        <Link to="/education" className="link">
          Education
        </Link>
      </div>
    </>
  );
};

export default Layout;
