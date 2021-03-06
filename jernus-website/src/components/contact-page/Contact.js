import React, {Component} from 'react';
import './Contact.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

class Contact extends Component{
    render(){
        return(
            <div id="contact-page">
                <div>
                    <a href="https://www.linkedin.com/in/jerry-lin-uoa-mit/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/Jernus?tab=repositories"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.facebook.com/profile.php?id=100001689915324"><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
                <div>
                    <a><FontAwesomeIcon icon={faEnvelope} /> jerry50708@gmail.com</a>
                </div>
            </div>
        );
    }
}

export default Contact;