import React, {Component} from 'react';
import './Experience.css';

class Experience extends Component{
    render(){
        return(
            <div id="experience-page">
                <h1 id="experience-head">Experience</h1>
                <div id="experience-body">
                    <div>
                        <h4>Graduate Teaching Assistant</h4>
                        <p>University of Auckland</p>
                        <p>November 2020 - Current</p>
                        <br></br>
                        <ul>
                            <li>Helped students complete lab exercise</li>
                            <li>Supported online students with Zoom meeting room</li>
                            <li>Debugged unexpected error during the lab</li>
                            <li>Did homework revision</li>
                        </ul>
                    </div>
                    <div>
                        <h4>University of Auckland Micro
Internship Consultant</h4>
                        <p>CPA Australia</p>
                        <p>November 2020
December 2020</p>
                        <br></br>
                        <ul>
                            <li>Helped CPA Australia to find why the number of accounting student is reducing</li>
                            <li>Collected the questionnaires</li>
                            <li>Analyzed the result and wrote a reflection</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;