import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ProjectCard from './components/ProjectCard';
import MouseTracker from './components/MouseTracker';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <ProjectCard />
        <MouseTracker /> {/* component that returns the mouse position, `callback function={state-updater function}` */}
      </header>
    </div>
  );
}

export default App;
