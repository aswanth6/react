import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const dropdownRef = useRef(null);
  const avatarRef = useRef(null);

  const toggleUserMenu = (e) => {
    e.stopPropagation();
    setShowUserMenu(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!avatarRef.current?.contains(event.target) && 
          !dropdownRef.current?.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="topbar">
      <div className="search-box">
        <input type="text" placeholder="Search..."/>
      </div>
      
      <div className="user-info">
        <select id="region-select">
          <option>India-Mumbai</option>
          <option>India-Hyderabad</option>
          <option>Australia</option>
          <option>Japan</option>
          <option>Singapore</option>
        </select>
        
        <div style={{position: "relative"}}>
          <img 
            ref={avatarRef}
            src="./images/6596121.png" 
            alt="User Avatar" 
            onClick={toggleUserMenu}
            style={{cursor: "pointer"}}
          />
          
          <div 
            id="user-dropdown" 
            ref={dropdownRef}
            style={{display: showUserMenu ? "block" : "none"}}
          >
            <div className="login-class">Profile</div>
            <div className="login-class">Settings</div>
            <div className="login-class">Logout</div>
          </div>
        </div>
        
        <span className="username">Aswanth G</span>
      </div>
    </div>
  );
};

export default Navbar;
