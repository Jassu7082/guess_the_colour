
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sp from './sp';
import Mp from './mp';
import Home from './temp';
function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sp" element={<Sp />} />
          <Route path="/mp" element={<Mp />} />
        </Routes>
      </div>
    </Router>
    
      
    
  );
}

export default App;
