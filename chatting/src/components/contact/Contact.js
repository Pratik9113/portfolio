// Contact.js
import React, { useState } from 'react';
import './Contact.css';
import { toast } from 'react-toastify';
const Contact = () => {

    const[name,setname] = useState("")
    const[email,setemail] = useState("")
    const[msg,setmsg] = useState("")

    // handle submit button
    const handleSubmit = (e) =>{
        e.preventDefault()
        try{
            if(!name || !email || !msg){
                toast.error('please provide all field')
            }
        }catch (error){
            console.log(error);
        }
    }
    return (
        <>
            <div className="contact" id="Contact">
                <div className="row1">
                    <div className="col">
                        <div className="row border-line">
                            <h2>Address</h2>
                            <p>Mumbai, Maharashtra</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row border-line">
                            <h2>Call Me</h2>
                            <p>+917999505967</p>
                        </div>
                    </div>
                </div>

                <div className="row1">
                    <div className="col">
                        <div className="row border-line">
                            <h2>Email Me</h2>
                            <p>pratik.patil9113@gmail.com</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row border-line">
                            <h2>Social Network</h2>
                            <p>Mumbai, Maharashtra</p>
                        </div>
                    </div>
                </div>
            </div>
          <div className="container" id ="Contact">
            <div className="contact-input">
                <div className="contact-text-field mb-3">
                        Enter Your Queries
                </div>
                <div className="row px-3 mb-4">
                  <div className='row px-3'>
                    <input type='text' name = 'name' placeholder='Enter your name' className='mb-3' value = {name} onChange={(e)=>setname(e.target.value)}/>
                  </div>
                  <div className='row px-3'>
                    <input type='email' name = 'email' placeholder='Enter your Email Id' className='mb-3' value = {email} onChange={(e)=>setemail(e.target.value)}/>
                  </div>
                  <div className='row px-3'>
                    <textarea type='text' name = 'msg' placeholder='Write your message' className='mb-3' value ={msg} onChange={(e)=>setmsg(e.target.value)}/>
                  </div>
                  <div className='row px-3'>
                    <button className='button' type='submit' onClick={handleSubmit}> Send Msg</button>
                  </div>
                </div>
                </div>
              </div>
        </>
    );
};

export default Contact;
