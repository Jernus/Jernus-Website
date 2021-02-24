import React, {Component} from 'react';
import './NavbarLeft.css';
import JernusLogo from '../../../assets/Jernus-logo.PNG';

class NavbarLeft extends Component{
    render(){
        return(
            <div id="nav-left">
                <img src={JernusLogo} id="jernus-logo" />
                <span id="jernus">Jerry Lin</span>
            </div>
        );
    }
}

export default NavbarLeft;