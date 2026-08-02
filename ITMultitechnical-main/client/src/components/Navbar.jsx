import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo">
          IT Multi <span className="gradient-text">Technical</span>
        </Link>

        {/* Navigation Links */}
        <nav className="nav-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Projects
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Services
          </NavLink>
        </nav>

        {/* Action Button */}
        <div className="header-actions">
          <Link to="/contact" className="btn-header-cta">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;