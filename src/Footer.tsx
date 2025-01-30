import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo */}
        <div className="footer-logo">
          <img src="/Assets/Sygnet.png" alt="NFT Market" /><span>NFT MARKET</span>
          <p className="footer-links">
            <a href="#">Support</a>
            <a href="#">Term of service</a>
            <a href="#">License</a>
          </p>
        </div>

        {/* Middle Section - Links */}
        <div className="footer-links-section">
          <ul>
            <li><a href="#">Auctions</a></li>
            <li><a href="#">Roadmap</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Community</a></li>
          </ul>
          <button className="account-btn">My account</button>
          <div className="social-icons">
            <a href="#"><img src="/Assets/Facebook Icon.png" alt="Facebook" /></a>
            <a href="#"><img src="/Assets/Vector (10).png" alt="LinkedIn" /></a>
            <a href="#"><img src="/Assets/Vector (11).png" alt="Instagram" /></a>
            <a href="#"><img src="/Assets/Vector (12).png" alt="Twitter" /></a>
            <a href="#"><img src="/Assets/Vector (13).png" alt="Website" /></a>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div className="footer-newsletter">
          <p>
          Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. 
          </p>
          <div className="newsletter-box">
            <input type="text" placeholder="Newsletter" />
            <button>Sign in</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
