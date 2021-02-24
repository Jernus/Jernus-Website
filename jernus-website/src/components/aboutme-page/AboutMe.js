import React, {Component} from 'react';
import './AboutMe.css';

class AboutMe extends Component{
    render(){
        return(
            <div id="about-me-page">
                <h1 id="about-me-head">About Me</h1>
                <div id="about-me-body">
                    <div id="about-me-avatar"></div>
                    <div id="about-me-content"></div>
                </div>
            </div>
        );
    }
}

export default AboutMe;