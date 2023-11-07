import Footer from "../components/Footer";
import Options from "../components/Options";
import Nav from "../components/Nav";
import AboutUs from "../components/AboutUs";
import '../styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../context/authContext';

function LandingPage () {
    const {currentUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleGetStarted = () => {
        if (currentUser) {
            navigate("/home");
        } else {
            navigate("/signup");
        }
    }

    return (
        <div className="homepage">
            <Nav />
            <div className="content">
                <div className="left col-6">
                    <br />
                    <h1 className="pt-5">Welcome to Planify!</h1>
                    <br />
                    <center>
                    <h3>At Planify, we simplify your busy life. Our user-friendly platform empowers you to effortlessly create, organize, and manage tasks, helping you stay in control of your time and productivity. 
                        Say goodbye to to-do list chaos and embrace a more organized, productive you. 
                        Get started with Planify today and seize control of your schedule! Join us now!
                    </h3>
                    <button className="start mt-2" onClick={() => {handleGetStarted()}}>Get Started</button>
                    </center>
                </div>
            </div>
            <Options />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default LandingPage;