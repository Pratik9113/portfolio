import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <div className='project'>
        <div className="container">
          <h2 className='col-12 mb-1 text-center'>Projects</h2>
          <hr />
          <p className='pb-3 text-center'>
            Here is my project with live link and source code
          </p>
        </div> 

        <div className="project-name">
          <div className="project-box">
            <div className="projects col-lg-4">
              <div className="project-outline-box">
                <img className="img-top" src='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg' alt='images' />
                <div className="body">
                  <h5 className="title">Card title</h5>
                  <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/#" className="btn btn-primary mx-1">Go somewhere</a>
                  <a href="/#" className="btn btn-primary mx-3">Github</a>
                </div>
              </div>
            </div>

            <div className="projects col-lg-4">
              <div className="project-outline-box">
                <img className="img-top" src='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg' alt='images' />
                <div className="body">
                  <h5 className="title">portfolio</h5>
                  <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/#" className="btn btn-primary mx-1">Go somewhere</a>
                  <a href="/#" className="btn btn-primary mx-3">Github</a>
                </div>
              </div>
            </div>


            <div className="projects col-lg-4">
              <div className="project-outline-box">
                <img className="img-top" src='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg' alt='images' />
                <div className="body">
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
