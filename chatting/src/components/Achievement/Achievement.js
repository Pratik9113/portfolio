import React from 'react';
import './Achievemnet.css';

const Achievement = () => {
  return (
    <>
      <div className='ach'>
        <div className="container">
          <h2 className='col-12 mb-1 text-center'>Achievement</h2>
          <hr />
          <p className='pb-3 text-center'>
            Here is my Achievement 
          </p>
        </div>

        <div className="ach-name">
          <div className="ach-box">
            <div className="ach1 col-lg-4">
                <div className="body">
                  <img className="img-top" src='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg' alt='images' />
                </div>
            </div>
          </div>

          <div className="ach-box">
            <div className="ach1 col-lg-4">
                <div className="body">
                  <img className="img-top" src='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg' alt='images' />
                </div>
            </div>
          </div>

          <div className="ach-box">
            <div className="ach1 col-lg-4">
                <div className="body">
                  <img className="img-top" src='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg' alt='images' />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievement;
