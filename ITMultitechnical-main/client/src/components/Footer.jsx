import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <h3>IT Multi Technical</h3>
          <p>Delivering high-performance web development, cloud solutions, and elite technical training programs.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul className="footer-contact-list">
            <li>Kathmandu, Nepal</li>
            <li>info@yourcompany.com</li>
            <li>+977-XXXXXXXXXX</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} IT Multi Technical & Training Institute Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;