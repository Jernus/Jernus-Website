import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import './CoverPage.css';

class CoverPage extends Component{
    render(){
        return(
            <div id="cover-page">
                <Navbar/>
            </div>
        );
    }
}

export default CoverPage;