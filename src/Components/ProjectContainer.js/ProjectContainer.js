import React from 'react'
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import "./ProjectContainer.css"

const ProjectContainer = () => {
    
    const projects = [
        {
            img:"https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg",
            title:"Overstock Shop",
            desc:"A product resale Website",
            link:"https://overstock-shop.web.app/",
        },
        {
            img:"https://images.unsplash.com/photo-1556379092-dca659792591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
            title:"Chatify",
            desc:"Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
            link:"https://chatify-49.web.app/",
        },
        {
            img:"https://4kwallpapers.com/images/walls/thumbs_2t/1003.jpg",
            title:"Quiz Hunter",
            desc:"This is an quiz application where peoples can do quiz test in various topics and justify their knowledges.",
            link:"https://63455aa31c79403e760f17f2--quiz-hunter.netlify.app/",
        },
        {
            img:"https://images.hdqwalls.com/wallpapers/tokyo-retro-art-4k-yf.jpg",
            title:"Toll Management System",
            desc:"The primary aim of a Toll Management System is to recover the amount that was invested in constructing, repairing and maintaining the operation by collecting revenues.",
            link:"https://strong-yeot-b568e2.netlify.app",
        },
        {
            img:"https://images4.alphacoders.com/936/936378.jpg",
            title:"Dealogic",
            desc:"Seller Can post Products to Sell, Delete Product and Promote Added product,Buyer Can Purchase any Product, cancel Order and make payment with Stripe,Admin Can manage, Users, Products, Product Status, Add product, publish blog.",
            link:"https://dealogic-msh.web.app/",
        },
    ];

  return (
    <Element className='projectContainer' id='projects'>
        <h1>PROJECTS</h1>
        <p>
            Here are some Projects I have done.
        </p>
        <div className='projectContainer__projects'>
{
    projects.map((project,index)=>{
        return (
            <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
        )
    })
}
        </div>
    </Element>
  );
};

export default ProjectContainer
