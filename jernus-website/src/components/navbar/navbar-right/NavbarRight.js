import React, {Component} from 'react';
import './NavbarRight.css';

class NavbarRight extends Component{
    render(){
        return(
            <div id="nav-right">
                <a href="#about-me-page">About Me</a>
                <a href="#education-page">Education</a>
                <a href="#skill-page">Skill</a>
                <a href="#project-page">Project</a>
                <a href="#achivement-page">Achivement</a>
                <a href="#contact-page">Contact</a>
            </div>
        );
    }
}

export default NavbarRight;