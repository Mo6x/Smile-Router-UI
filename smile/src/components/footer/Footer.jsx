import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Internet Connectivity</span>
            <span>Wireless Network Management</span>
            <span>Security Features</span>
            <span>Network Monitoring and Control</span>
            <span>Device Integration</span>
            <span>Mobile App Integration</span>
            <span>Quality of Service</span>
            <span>Firmware Updates and Enhancements</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>High-speed internet connectivity</span>
            <span>Ethernet ports for wired connections</span>
            <span>Privacy Policy</span>
            <span>settings for optimizing network performance</span>
            <span>Network monitoring and traffic analysis tools</span>
            <span>Security features such as firewall protection and VPN support</span>
            <span>Mobile app for remote management and control</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Customer Support Hotlin</span>
            <span>Email Support</span>
            <span>Live Cha</span>
            <span>Online Knowledge Base</span>
            <span>Community Forums</span>
            <span>Social Media Support</span>
          </div>
         
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Smile-Router</h2>
            <span>©Smile-Router International Ltd. 2022</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
