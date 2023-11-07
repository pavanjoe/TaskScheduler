import { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';
import 'css-doodle';
import LoginBackground from '../components/loginbackground';

const Login = () => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.emailVerified === false) {
            setError("Email not verified!")
            alert("Email not verified! Check your mailbox for a verification email.")
            return;
          }
          dispatch({type:"LOGIN", payload:user})
          navigate("/")
        })
        .catch((error) => {
          setError("Wrong credentials!");
          console.log(error.code, error.message)
        });
    }

    const handleReset = (e) => {
        e.preventDefault()
        navigate("/reset")
    }

    const handleClick = (e) => {
        e.preventDefault()
        navigate("/signup")
    }

    const handleResendMail = (e) => {
        e.preventDefault()
        navigate("/resend")
    }

    return(
        <>
            <LoginBackground />
            <div className="position-absolute d-flex flex-row m-0" 
            style={{height:"100%", width: "90%", left: "5%", top: "0", zIndex: "0", animation: "fadeIn 0.5s"}}>
                <div className='col-xl-3 col-lg-4 col-0'></div>
                <div className='position-relative col-xl-3 col-lg-5 col-8 mx-auto border rounded' style={{height: "66%", top: "17%", backgroundColor: "white"}}>
                    <form 
                        onSubmit={handleLogin} 
                        className='container d-flex flex-column p-sm-5'>
                        <img 
                            src="https://cdn.discordapp.com/attachments/1148952235431178302/1170672051296677998/WhatsApp_Image_2023-11-01_at_21.25.28_ed920a72-removebg-preview.png?ex=6559e44f&is=65476f4f&hm=4647a13008ce64a7f147a035dd7e29372e25dace5b6da8fdb3e1077d219042f6&" 
                            alt="logo" 
                            className='mx-auto'
                            height={100}
                            width={100} />
                        <h5 className='text-center mb-4'>Login</h5>
                        <input
                            className='form-control mb-3 mx-auto rounded-pill border-0'
                            style={{backgroundColor: "#F5F5F5"}}
                            type="email"
                            placeholder="Enter e-mail"
                            onChange={(e) => {setEmail(e.target.value); setError(null)}}
                            required />
                        <input
                            className='form-control mb-3 mx-auto rounded-pill border-0'
                            style={{backgroundColor: "#F5F5F5"}}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => {setPassword(e.target.value); setError(null)}}
                            required />
                        <span 
                            className='text-primary pb-3 text-end'
                            style={{cursor: "pointer", font: "small-caption"}} 
                            onClick={(e) => handleReset(e)} >
                            Forgot password?
                        </span>
                        <button 
                            type="submit" 
                            className='btn btn-primary mb-3 mx-auto rounded-pill shadow' >
                            Log in</button>
                        <span className='text-danger mx-auto'>{error}</span>
                        <div className='text-center text-secondary'>
                            Don't have an account? 
                            <span 
                                className='text-primary px-1' 
                                onClick={(e) => {handleClick(e)} }
                                style={{cursor: "pointer"}} >
                                <br />
                                Sign Up
                            </span>
                        </div>
                        <div className='text-center text-secondary pt-2' style={{font: "small-caption"}}>
                            <span
                                className='text-primary px-1'
                                onClick={(e) => {handleResendMail(e)}}
                                style={{cursor: "pointer"}} >
                            Click here 
                            </span>
                            to resend verification email
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
 
export default Login