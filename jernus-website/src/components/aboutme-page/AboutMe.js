import React, {Component} from 'react';
import './AboutMe.css';

class AboutMe extends Component{
    render(){
        return(
            <div id="about-me-page">
                <h1 id="about-me-head">About Me</h1>
                <div id="about-me-body">
                    <div id="about-me-avatar"></div>
                    <div id="about-me-content">
                        <p>" A passionate developer who loves to use web technologies to demonstrate creativity and innovation. I've study management skills during my bachelor degree and now focus on technical skills learning. Therefore, I'm not only can build the program, but also have the ability to present my work to people. Currently studying at the University of Auckland and taking MSA(Microsoft Student Accelerator) program in the meantime. Looking for summer internship opportunities in 2020 and 2021. "</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;