
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Game from './components/singleplayer/sp';
import Home from './components/home/home';
import Learn from "./components/learn/learn";
function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sp" element={<Game />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </div>
    </Router>
    
      
    
  );
}

export default App;
