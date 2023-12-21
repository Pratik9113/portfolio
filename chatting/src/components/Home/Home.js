import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../docs/resume.txt';
const Home = () => {
  return (
    <>
      <div className='container-fluid home-container'>
        <div className=' home-content'>
            <h3>
              Hii I am Pratik Patil...
            </h3>
            <h2>
            <Typewriter
                  options={{
                    strings: ['Full-Stack Web Development with MERN Stack!', 'C++ Programming Excellence !','Machine Learning Enthusiast !'],
                    autoStart: true,
                    loop: true,
                  }}
            />
            </h2>
            <div className='home-button'>
              <button className='btn btn-hire'>Hire Me</button>
              <a className='btn btn-cv' href = {Resume} download="yourname.pdf">My Resume</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
