import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>M.Santha Neelan</h1>
            <p>Professional Web Developer</p>
            <a href="https://mellifluous-belekoy-a92db4.netlify.app/">
                <button className="topContent__downloadButton">My Creative CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="topContent__workButton">My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent
