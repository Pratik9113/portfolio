import React, {useState, useEffect } from 'react'
import './About.css';
import Typewriter from 'typewriter-effect';
const About = () => {
  const [ showTypewriter, setShowTypewriter] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowTypewriter(false);
    },9000);
    return () => clearTimeout(timer);
  },[]);
  return (
    <>
        <div className='about'>
          <div class="container">
            <div class="row profile">
              <div class="col-sm-4">
                <div className='about-profile'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU' alt='profile pic' />
                </div>
              </div>
              <div class="about-section col-lg-8">
              <div className='about-section-main'>
                    <h1 className='text'>
                      {showTypewriter && (
                    <Typewriter
                        options={{
                          strings: ['About Me - PRATIK PATIL'],
                          autoStart: true,
                          loop:false,
                          
                        }}
                  />
                      )}
                      {!showTypewriter && (
                        <div className='about-content'>
                          <p>About Me - Pratik Patil</p>
                        </div>
                      )}
                    </h1>
                    <div className='about-text'>
                        <p className='about-text-main'>
                        Enthusiastic and versatile, I am a professional with a passion for creating
                        impactful solutions in the realms of web development,c++ development
                        My expertise spans across two key area
                        </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About