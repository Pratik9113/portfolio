import React from 'react';
import './Achievemnet.css';

const Achievement = () => {
  return (
    <>
      <div className="spaces1">
        <div className="blank"></div>
      <div className='ach' id='Achievemnet'>
        <h2 className='col-12 mb-1 text-center'>Achievement</h2>
        <hr className='line' />
        <p className='pb-3 text-center'>Here is my Achievement</p>
      </div>

      <div className="container">
        <div className="ach-name ">
          <div className="ach-box col-12 col-sm-6">
            <div className="ach1 col-12 col-sm-6">
              <div className="body-ach">
                <img className="img-achieve-top" src='https://assets.leetcode.com/static_assets/marketing/2023-50.gif' alt='images' />
              </div>
            </div>
          </div>

          <div className="ach-box col-12 col-sm-6">
            <div className="ach1 col-12 col-sm-6">
              <div className="body-ach">
                <img className="img-achieve-top" src='https://assets.leetcode.com/static_assets/marketing/2023-100.gif' alt='images' />
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

export default Achievement;
