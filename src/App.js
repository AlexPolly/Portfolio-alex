import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Edu from './Components/Edu';
import Project from './Components/Project';
import Skill from './Components/Skill';
import NavBar from './Components/Navbar';

function App() {
  const [isDarkMode, setDarkMode] = useState(false)
  return (
    <> 
    <div className={isDarkMode?`darkmode`:`lightmode`}>
      <NavBar  isDarkMode={isDarkMode} setDarkMode={setDarkMode}/><hr />
      <About isDarkMode={isDarkMode}  />
      <hr />
      <Skill isDarkMode={isDarkMode}/>
      <hr />
      <Edu isDarkMode={isDarkMode}/>
      <hr />
      <Project isDarkMode={isDarkMode}/>
      <hr />
      <Contact isDarkMode={isDarkMode}/>
    </div>
    </>
  );
}

export default App;
