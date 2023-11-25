import React, {useEffect, useState} from 'react';
import './Navbar.css'; // Include your CSS file for styling

const Navbar = () => {
    
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="logo">ComiX</div>
      <ul className="nav-links">
      </ul>
    </nav>
  );
};

export default Navbar;
