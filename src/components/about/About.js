import React from 'react';
import "./About.css"
import Nav from '../shared/nav/nav';
import Footer from '../shared/footer/footer';


export default function About (){


    return(
        <div>
            <Nav/>
            <div  className="about-content" style={{textAlign:"center"}}>About........</div>
            <Footer/>
        </div>
    )
}
