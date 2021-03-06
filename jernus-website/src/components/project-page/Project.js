import React, {Component} from 'react';
import  './Project.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

class Project extends Component{
    render(){
        return(
            <div id="project-page">
                <h1 id="project-head">Project</h1>
                <div id="project-body">
                    <iframe src="https://www.youtube.com/embed/Ey2kFHm9YMk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false}></iframe>
                    <div>
                        <p className="project-content">HORUS is a system that combined image recognition and drone. This name does not only represent the sky god in the ancient Egyptian mythology but also is an acronym for "Helpful Observant Rapid Untiring Stable".</p>
                        <div id="project-more-button">
                            <a href="https://github.com/Jernus?tab=repositories">See more projects <FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;