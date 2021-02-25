import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import './CoverPage.css';
import Typing from 'react-typing-animation';

class CoverPage extends Component{
    render(){
        return(
            <div id="cover-page">
                <Navbar/>
                <div id="cover-body">
                    <div id="cover-content">
                        <div>
                            <p id="cover-head">Hi! I'm Jerry</p>
                            <Typing loop={true} speed={70} hideCursor={true}>
                                <p className="cover-word">Master of Information Technology</p>
                                <Typing.Backspace count={35} delay={500} />
                                <p className="cover-word">Love Web Development</p>
                                <Typing.Backspace count={25} delay={500} />
                                <p className="cover-word">Fan of Djokovic</p>
                                <Typing.Backspace count={20} delay={500} />
                            </Typing>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoverPage;