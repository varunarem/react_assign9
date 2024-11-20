import { useState } from "react";
import React from 'react';


const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <div>
      <nav className='container'>
        <div className='logo'>
        <img src="/Images/nike logo.png" alt="logo"/>

        <ul>
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/about">About</a>
        <a href="/location">Location</a>
        <a href="/contact">Contact</a>
        </ul>
      
    
        <button
          onClick={handleLoginClick}
          
        >
          Login
        </button>
      </div>
      </nav>

      {showLogin && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'white',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
            borderRadius: '10px',
            zIndex: 1000,
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Login</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input
              type="email"
              placeholder="Email"
              style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
            />
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#28A745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </form>
          <button
            onClick={handleLoginClick}
            style={{
              marginTop: '15px',
              padding: '10px',
              backgroundColor: '#DC3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      )}
      {showLogin && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
          onClick={handleLoginClick}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
