import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <div className='project' id = "Project">
        <div className="container">
          <h1 className='col-12 mb-1 text-center'>Projects</h1>
          <hr />
          <p className='pb-3 text-center'>
            Here is my project with live link and source code
          </p>
        </div> 

        <div className="project-name">
          <div className="project-box">

          <div className='project-details'>
              <div className="projects col-lg-4">
                <div className="project-outline-box">
                  <img className="img-top" src='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg' alt='images' />
                </div>
              </div>

              <div className="body col-lg-7">
                   <div className='align'>
                    <h5 className="title">Card title</h5>
                    <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/#" className="btn btn-primary mx-1">Go somewhere</a>
                    <a href="/#" className="btn btn-primary mx-3">Github</a>
                    </div>
                </div>
            </div>
              <h6 className='project-h1-text'> ------------------x---------------- </h6>
            <div className='project-details'>
                <div className="body col-lg-7">
                   <div className='align'>
                    <h5 className="title">Card title</h5>
                    <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/#" className="btn btn-primary mx-1">Go somewhere</a>
                    <a href="/#" className="btn btn-primary mx-3">Github</a>
                    </div>
                </div>

              <div className="projects col-lg-4">
                <div className="project-outline-box">
                  <img className="img-top" src='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg' alt='images' />
                </div>
              </div>
            </div>
            <h6 className='project-h1-text'> ------------------x---------------- </h6>

            <div className='project-details'>
              <div className="projects col-lg-4">
                <div className="project-outline-box">
                  <img className="img-top" src='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg' alt='images' />
                </div>
              </div>

              <div className="body col-lg-7">
                   <div className='align'>
                    <h5 className="title">Card title</h5>
                    <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/#" className="btn btn-primary mx-1">Go somewhere</a>
                    <a href="/#" className="btn btn-primary mx-3">Github</a>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
