import React, {Component} from 'react';
import NavbarLeft from '../navbar-left/NavbarLeft';

class Navbar extends Component{
    render(){
        return(
            <div>
                <div id="nav-left">
                    <NavbarLeft/>
                </div>
                <div id="nav-right"></div>
            </div>
        );
    }
}

export default Navbar;