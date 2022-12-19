import React from 'react';
import { Element } from 'react-scroll';
import Experience from '../ExperienceBox/Experience';
import "./ExperienceContainer.css";
const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='exp'>
        <h1>Experience</h1>
        <div className='experienceContainer__info'>
            <Experience number="3+" title="months of Course" />
            <Experience number="6+" title="months of Training" style={{ backgroundColor: "#f64c08" }} />
            <Experience number="25+" title="Projects" />
        </div>
    </Element>
  )
}

export default ExperienceContainer
