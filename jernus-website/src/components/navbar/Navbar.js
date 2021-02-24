import React, {Component} from 'react';
import NavbarLeft from './navbar-left/NavbarLeft';
import NavbarRight from './navbar-right/NavbarRight';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div id="nav-bar">
                <div id="left">
                    <NavbarLeft />
                </div>
                <div id="right">
                    <NavbarRight />
                </div>
            </div>
        );
    }
}

export default Navbar;