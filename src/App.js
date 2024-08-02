import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
  <div className="App">
    <div className="Navbar">
      <Navbar />
    </div>
    <div className='pages'>
      <div className='page-container' id='home'>
        <Home />
      </div>
      <div className='page-container' id='about'>
        <About />
      </div>
      <div className='page-container' id='contact'>
        <Contact />
      </div>
    </div>
  </div>
  );
}

export default App;