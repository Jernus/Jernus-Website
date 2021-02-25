import CoverPage from './components/cover-page/CoverPage';
import AboutMe from './components/aboutme-page/AboutMe';
import Education from './components/education-page/Education';
import Skill from './components/skill-page/Skill';
import Project from './components/project-page/Project';
import Achivement from './components/achivement-page/Achivement';
import Contact from './components/contact-page/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <CoverPage />
      <div id="main-body">
        <AboutMe />
        <Education />
        <Skill />
        <Project />
        <Achivement />
        <Contact />
      </div>
    </div>
  );
}

export default App;