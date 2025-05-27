import './App.css';
import ProjectCard from './components/ProjectCard';
import Button from './components/Button';
import MouseTracker from './components/MouseTracker';
import { useState } from 'react';

function App() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleButtonClick = (value) => {
    alert(`You clicked: ${value}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ProjectCard />
        <Button value="Delete" onClick={handleButtonClick} /> {/*  */}
        <MouseTracker onMouseMove={setCoordinates} /> {/* component that returns the mouse position, `callback function={state-updater function}` */}
      </header>
    </div>
  );
}

export default App;
