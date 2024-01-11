import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Homepage from './pages/home/Homepage';

function App() {
  return (
    <Router>
      <Routes>
    
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
