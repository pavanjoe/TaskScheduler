import '../styles/Homenav.css';
import { useNavigate } from 'react-router-dom';

function Nav() {
  
  const navigate = useNavigate(); 
  
  

  return (
    <nav className="navbar navbar-expand-lg py-2">
      <span className="navbar-brand mx-4" onClick={() => {navigate("/")}} style={{cursor: "pointer"}}>Planify</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <span className="nav-link mx-3" onClick={() => {navigate("/")}} style={{cursor: "pointer"}}>
              Home
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link mx-3" onClick={() => {navigate("/about")}} style={{cursor: "pointer"}}>
              About Us
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link mx-3" onClick={() => {navigate("/contact")}} style={{cursor: "pointer"}}>
              Contact Us
            </span>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <button className="me-4 login" onClick={() => {navigate("/login")}}>Login</button>
      </div>
    </nav>
  );
}

export default Nav;
