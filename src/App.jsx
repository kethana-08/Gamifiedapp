// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/login";
import Leaderboard from "./components/Leaderboard";  // ✅ Correct
import STEMGame from "./components/STEMgame";
import Chatbot from "./components/Chatbot";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/stemgame" element={<STEMGame />} />
<Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
