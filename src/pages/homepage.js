import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Options from "../components/Options";
import './HomePage.css'

function Homepage () {
    return (
        <div>
            <Nav />
            <div className="body">
                <div className="left col-6">
                    <br />
                    <h1 className="pt-5">Welcome to Planify!</h1>
                    <br />
                    <h3>At Planify, we simplify your busy life. Our user-friendly platform empowers you to effortlessly create, organize, and manage tasks, helping you stay in control of your time and productivity. 
                        Say goodbye to to-do list chaos and embrace a more organized, productive you. 
                        Get started with Planify today and seize control of your schedule!
                    </h3>
                    <button className="mt-4">Get Started</button>
                </div>
            </div>
            <Options />
            <Footer />
        </div>
    );
}

export default Homepage;