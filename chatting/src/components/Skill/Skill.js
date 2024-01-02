// Skill.js

import React from 'react';
import './Skill.css';

const Skill = () => {
  // const [showMore, setShowMore] = useState(false);


  //useEffect(() => {
  //   const handleResize = () => {
  //     setShowMore(window.innerWidth <= 900);
  //   };
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   }; 
  // }, []);

  const skills = [
    { title: '1.C++', progress: 80 },
    { title: '2.HTML', progress: 95 },
    { title: '3.CSS', progress: 75 },
    { title: '4.JavaScript', progress: 80 },
    { title: '5.NodeJs', progress: 70 },
    { title: '6.ExpressJs', progress: 70 },
    { title: '7.Python', progress: 60 },
    { title: '8.Machine Learning', progress: 75 },
    { title: '9.MERN-Stack', progress: 79 }
  ];

  return (
    <>
      <div className='skill'>
      <div className="container skill-caption">
          <h2 className='col-12 mb-1 text-center'>Skill</h2>
          
        </div> 
        <div className="container10">
          <div className="row">
            {skills.slice(0).map((skill, index) => (
              <div key={index} className="box-skill col-xl-4">
                <div className="adjust-skill ">
                <h2 className='text-skill'>{skill.title}</h2>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.progress}%` }}></div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>

        {/*{showMore && window.innerWidth > 900 && (
          <div className="container additional-skills">
            <div className="row">
              {skills.slice(3).map((skill, index) => (
                <div key={index} className="col-xl-4">
                  <h2 className='text'>{skill.title}</h2>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${skill.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}*/}

       
        
      </div>
      <div className='content-space'></div>
    </>
  );
}

export default Skill;
