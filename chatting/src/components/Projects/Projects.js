import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <>
        <div className='project'>
            <div className="container">
                <h2 className='col-12 mb-1 text-center'>Projects</h2>
                <hr/>
                <p className='pb-3 text-center'>
                    Here is my project with live link and source code
                </p>

                <div className="row" id ="ads">
                        <div className="col-md-4">
                          <div className="card rounded">
                            <div className="card-image">
                              <span className='card-notify-bagde'>Full Stack</span>
                              <img src="data:image/jpeg;base64,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" alt= "project1"/>
                              <div className="card-image-overly">
                                <span className="card-details">Node</span>
                                <span className="card-details">React</span>
                                <span className="card-details">MongoDB</span>
                                <span className="card-details">Express</span>
                              </div>
                              <div className="card-body">
                                <div className="ad-title">
                                  <h5 className="text-uppercase">Portfolio</h5>
                                </div>
                                <a className="adss"href = "/">View</a>
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects
