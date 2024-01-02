import React from 'react';
import './Projects.css';
import amazon from '../../amazon.png';
import notifyu from '../../notifyu.png';
const Projects = () => {
  return (
    <>

      <div className='project' id = "Project">
        <div className="container">
          <h1 className='col-12 mb-1 text-center'>Projects</h1>
          <hr/>
          <p className='pb-3 text-center'>
            Here is my project with live link and source code
          </p>
        </div> 
        <div className="project-name">
          <div className="project-box">

          <div className='project-details'>
              <div className="projects-container col-sm-5">
                <div className="project-outline-box col-sm-5">
                  <img className="img-top" src='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg' alt='images' />
                </div>
              </div>

              <div className="body col-sm-7">
                    <div className='align'>
                    <h5 className="title text">Portfolio-MERN</h5>
                    <p className="text"> a dark mode-enabled portfolio using the MERN (MongoDB, Express.js, React, Node.js) stack and have included features like email facilities, a responsive navbar, and sections about education and projects.</p>
                    <a href="https://portfolio-4qlk.onrender.com" className="btn btn-primary mx-1">GoLive</a>
                    <a href="https://github.com/Pratik9113/portfolio-mern-project.git" className="btn btn-primary mx-3">Github</a>
                    </div>
              </div>
          </div>
             
            <div className='project-details'>

              <div className="projects-container col-sm-5">
                <div className="project-outline-box col-sm-5">
                  <img className="img-top" src={notifyu} alt='images' />
                </div>
              </div>

              <div className="body col-sm-7">
                    <div className='align'>
                    <h5 className="title text">NotifyU - Java GUI</h5>
                    <p className="text">NotifyU, a Java GUI-based system with distinct interfaces for administrators and students, incorporates bulk SMS functionality via an API for event notifications, streamlining student registration and communication for collegiate events</p>
                    <a href="/#" className="btn btn-primary mx-1">Go somewhere</a>
                    <a href="https://github.com/Pratik9113/notifyumain.git" className="btn btn-primary mx-3">Github</a>
                    </div>
              </div>
            </div>
            

            <div className='project-details'>
              <div className="projects-container col-sm-5">
                <div className="project-outline-box col-sm-5">
                  <img className="img-top" src={amazon} alt='images' />
                </div>
              </div>

              <div className="body col-sm-7">
                    <div className='align'>
                    <h5 className="title text">Amazon clone - HTML,CSS</h5>
                    <p className="text">Amazon clone using HTML and CSS, showcasing proficiency in front-end development. Successfully replicated key features, including a responsive layout, navigation menu, and product display.</p>
                    <a href="/#" className="btn btn-primary mx-1">Go somewhere</a>
                    <a href="https://github.com/Pratik9113/amazon-clone-frontend.git" className="btn btn-primary mx-3">Github</a>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className='content-space'></div>
    </>
  );
}

export default Projects;