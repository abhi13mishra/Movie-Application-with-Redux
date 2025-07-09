import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* More routes like /login /watchlist /booking will come */}
      </Routes>
    </Router>
  );
}

export default App;