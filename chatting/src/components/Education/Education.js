import React from 'react'
import {MdSchool} from 'react-icons/md'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'
const Education = () => {
  return (
    <>
        <div className="education" id ="Education">
            <h1 className="col-12 mt-3 mb-1 text-center">Education</h1>
            <hr/>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
  
  
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                Strategy, Social Media
                </p>
            </VerticalTimelineElement>
         </VerticalTimeline>
        </div>
    </>
  )
}

export default Education
