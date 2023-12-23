import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <>
      <div className='container-fluid home-container id = "Home"'>
        <div className=' home-content'>
        <h1 className='home-text'>Each project is crafted with unique technologies</h1>
            <h2>
            <Typewriter
                  options={{
                    strings: ['Full-Stack Web Development with MERN Stack!', 'C++ Programming Excellence !','Machine Learning Enthusiast !'],
                    autoStart: true,
                    loop: true,
                  }}
            />
            </h2>
        </div>
        </div>
    </>
  )
}

export default Home
