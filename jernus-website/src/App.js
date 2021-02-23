import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/Navbar';
import CoverPage from './components/cover-page/CoverPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CoverPage/>
    </div>
  );
}

export default App;