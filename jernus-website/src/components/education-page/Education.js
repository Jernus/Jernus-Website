import React,  {Component} from 'react';
import './Education.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';

import UOAlogo from '../../assets/uoa-logo.png';
import NDHUlogo from '../../assets/ndhu-logo.png';

class Education extends Component{
    render(){
        return(
            <div id="education-page">
                <h1 id="education-head">Education</h1>
                <div id="education-body">
                    <div className="education-element">
                        <img src={UOAlogo} className="education-logo"/>
                        <div>
                            <h4><FontAwesomeIcon icon={faGraduationCap} /> University of Auckland - Master of Information Technology</h4>
                            <p>2020 - 2022</p>
                            <ul>
                                <li>Cumulative Grade Point Average (GPA): 8.25</li>
                                <li>Outstanding Achievement in COMPSCI-718, COMPSCI-719, COMPSCI-701</li>
                            </ul>
                        </div>
                    </div>
                    <div className="education-element">
                        <img src={NDHUlogo} className="education-logo"/>
                        <div>
                            <h4><FontAwesomeIcon icon={faGraduationCap} /> National Dong Hwa University - Bachelor of Information Management</h4>
                            <p>2015 - 2019</p>
                            <ul>
                                <li>Cumulative Grade Point Average (GPA): 3.70 (out of 4.50)</li>
                                <li>Team leader in Project HORUS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;