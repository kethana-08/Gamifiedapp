// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Leaderboard from "./components/Leaderboard";
import STEMGame from "./components/STEMgame";
import Chatbot from "./components/Chatbot";
import EducaplayEmbed from "./components/EducaplayEmbed"; 
import { AuthProvider } from "./components/AuthContext";        
import ProtectedRoute from "./components/ProtectedRoute"; 
import "./App.css";
import Starfield from "./components/Starfield";
import Modal from "./components/Modal";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        {/* Background video */}
        <video
          className="bg-video"
          src="/videos/background.mp4"  // place bg.mp4 inside public/videos/
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Foreground content (your routes) */}
        <div className="content">
          <Router>
            <Routes>
              <Route path="/landing" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/stemgame" element={<STEMGame />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route
                path="/educaplay"
                element={
                  <ProtectedRoute>
                    <EducaplayEmbed />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Landing />} />
            </Routes>
          </Router>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
