import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiHeart, FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdKeyboardArrowDown } from "react-icons/md";
import "./HeaderView.css"; // Import file CSS

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(2);

  const menuItems = [
    { name: "Home", link: "#" },
    { name: "Shop", link: "#", hasDropdown: true },
    { name: "Pages", link: "#", hasDropdown: true },
    { name: "Blog", link: "#" },
    { name: "Contact", link: "#" },
  ];

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container" >
            <div className="maintain">
                <div className="contact-info">
                <div className="contact-item">
                <MdEmail className="icon" />
                <span>info@example.com</span>
                </div>
                <div className="contact-item">
                <MdPhone className="icon" />
                <span>+1 234 567 8900</span>
                </div>
            </div>
            <div className="social-and-login">
                <div className="social-icons">
                <FaFacebookF className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaInstagram className="social-icon" />
                <FaLinkedinIn className="social-icon" />
                </div>
                <div className="language-login">
                <select className="language-select">
                    <option value="en">English</option>
                    <option value="es">Vietnamese</option>
                </select>
                <button className="login-button">Login</button>
                </div>
            </div>
            </div>
          
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo">
              <img 
                src="https://preview.colorlib.com/theme/ogani/img/logo.png.webp" 
                alt="Logo" 
                className="logo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/160x48?text=Logo";
                }}
              />
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu">
              {menuItems.map((item, index) => (
                <div key={index} className="menu-item">
                  <a
                    href={item.link}
                    className="menu-link"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <MdKeyboardArrowDown className="dropdown-icon" />
                    )}
                  </a>
                  {item.hasDropdown && (
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">Submenu 1</a>
                      <a href="#" className="dropdown-item">Submenu 2</a>
                      <a href="#" className="dropdown-item">Submenu 3</a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search and Cart */}
            <div className="search-cart">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <FiSearch className="search-icon" />
              </div>
              <div className="cart-wishlist">
                <div className="wishlist-icon">
                  <FiHeart className="icon" />
                  <span className="badge">{wishlistCount}</span>
                </div>
                <div className="cart-icon">
                  <FiShoppingCart className="icon" />
                  <span className="badge">{cartCount}</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="mobile-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
          <div className="displayForm">
            <div className="search-bar-mobile">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <FiSearch className="search-icon" />
          </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu">
              <div className="mobile-menu-header">
                <button onClick={() => setIsMenuOpen(false)}>
                  <FiX size={24} className="close-icon" />
                </button>
              </div>
              <div className="mobile-menu-items">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <a
                      href={item.link}
                      className="mobile-menu-link"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
      </nav>
      
      
    </header>
  );
};

export default Header;
