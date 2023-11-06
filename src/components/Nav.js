import './Nav.css'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from '../context/authContext';
import { useContext } from "react";

function Nav() {
  const {dispatch} = useContext(AuthContext)
  
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
    .then(() => {
        dispatch({type:"LOGOUT"})
        window.location.reload();
    }).catch((error) => {
        console.log(error.code, error.message)
    });
}

  return (
    <nav className="navbar navbar-expand-lg py-2">
      <a className="navbar-brand mx-4" href="/">Planify</a>
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
            <a className="nav-link mx-3" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-3" href="/create-task">
              Create Task
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-3" href="/about-us">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-3" href="/contact-us">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <button className="btn btn-danger me-4"
        onClick={(e) => {handleSignOut(e)}} >Logout</button>
      </div>
    </nav>
  );
}

export default Nav;
