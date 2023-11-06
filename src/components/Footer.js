import React from 'react';
import './Footer.css'; // Import your CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Planify: Your Go-To Task Scheduling App</p>
      </div>
    </footer>
  );
}

export default Footer;
