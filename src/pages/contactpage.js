import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Contactpage = () => {
    const[data,setData]=useState({name:"",email:"",phone:"",message:""})
    const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setData({...data,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
    }

    return (
        <>
            <Nav />
            <div className="container">
                <form action="#" method="POST" onSubmit={handleSubmit} className="contact-form">
                    <h1>Contact <span>Us</span> </h1>
                    <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter your name" autoComplete="off" required/>
                    <input type="email" name="email" id=""  onChange={handleChange} value={data.email} placeholder="Enter your email" autoComplete="off" required/>
                    <input type="tel" name="phone" id=""  onChange={handleChange} value={data.phone} placeholder="Enter your phone no." autoComplete="off" required/>
                    <textarea name="message" id="" rows="10" cols="30"  onChange={handleChange} value={data.message} placeholder="type your message... " autoComplete="off" required/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </>
    );
}
export default Contactpage;