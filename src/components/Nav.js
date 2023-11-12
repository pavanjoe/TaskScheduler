import '../styles/Nav.css'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from '../context/authContext';
import { useContext } from "react";
import Logo1 from './images/img_avatar.png';

function Nav() {
  const {currentUser} = useContext(AuthContext);

  const {dispatch} = useContext(AuthContext)
  
  const navigate = useNavigate(); 
  
  const handleHome = () => {
    if (currentUser) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
    .then(() => {
        dispatch({type:"LOGOUT"})
        alert("Logged out successfully");
        navigate("/");
    }).catch((error) => {
        console.log(error.code, error.message)
    });
  }

  return (
    <div className='nav-wrapper'>
      <nav className="navbar navbar-expand-sm py-2">
        <div className='container-fluid d-flex justify-content-between'>
          <span className="navbar-brand mx-sm-4 mx-0 order-0 flex-sm-grow-0 flex-grow-1" onClick={() => {handleHome()}} style={{cursor: "pointer"}}>Planify</span>
          
          <button 
            class="navbar-toggler mx-3 bg-white" 
            type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" 
            aria-controls="navbarTogglerDemo03" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse order-sm-1 order-2" id="navbarNav">
            <ul className="navbar-nav ml-auto d-flex align-items-start">
              <li className="nav-item">
                <span className="nav-link mx-3" onClick={() => {handleHome()}} style={{cursor: "pointer"}}>
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link mx-3" onClick={() => {navigate("/contact")}} style={{cursor: "pointer"}}>
                  Contact Us
                </span>
              </li>
            </ul>
          </div>
          
          {currentUser &&
            <div className='dropdown me-3 order-sm-2 order-1'>
              <div id="profileIconDropdown" data-bs-toggle="dropdown" aria-expanded="false"
              style={{cursor: "pointer"}}>
                <img src={Logo1} alt='profile' className='rounded-circle' width='40px' height='40px' />
              </div>
              
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileIconDropdown">
                <li className="dropdown-item" onClick={() => {navigate("/profile")}} 
                style={{cursor: "pointer", userSelect: "none"}}>Profile</li>
                <li className="dropdown-item" onClick={() => {navigate("/settings")}}
                style={{cursor: "pointer", userSelect: "none"}}>Account Settings</li>
                <li className="dropdown-item" onClick={(e) => {handleSignOut(e)}} 
                style={{cursor: "pointer", userSelect: "none"}}>Logout</li>
              </ul> 
            </div>
          }

          {!currentUser &&
          <div className="ml-auto order-sm-2 order-1">
            <button className="btn btn-danger me-4"
            onClick={() => {navigate("/login")}} >Login</button>
          </div>
          }
        </div>
      </nav>
    </div>
  );
}

export default Nav;
