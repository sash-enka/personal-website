import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Nav from './Components/Nav';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Experience />
    </div>
  );
}

export default App;
