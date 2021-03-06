import CoverPage from './components/cover-page/CoverPage';
import AboutMe from './components/aboutme-page/AboutMe';
import Education from './components/education-page/Education';
import Project from './components/project-page/Project';
import Experience from './components/experience-page/Experience';
import Contact from './components/contact-page/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <CoverPage />
      <div id="main-body">
        <AboutMe />
        <Education />
        <Project />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;