import React, {Component} from 'react';
import './NavbarRight.css';

class NavbarRight extends Component{
    render(){
        return(
            <div id="nav-right">
                <a href="#about-me-page" className="nav-link">About Me</a>
                <a href="#education-page" className="nav-link">Education</a>
                <a href="#skill-page" className="nav-link">Skill</a>
                <a href="#project-page" className="nav-link">Project</a>
                <a href="#achivement-page" className="nav-link">Achivement</a>
                <a href="#contact-page" className="nav-link">Contact</a>
            </div>
        );
    }
}

export default NavbarRight;