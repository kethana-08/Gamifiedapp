// src/components/Leaderboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Leaderboard() {
   const navigate = useNavigate();
  const [mode, setMode] = useState("individual");
  const [showChat, setShowChat] = useState(false);
const [roomCode, setRoomCode] = useState("");
const openEducaplayInNewTab = () => {
    window.open("https://www.educaplay.com/learning-resources/25509289-learn_arena.html", "_blank");
  };
const handlePlayIndividually = () => {
    openEducaplayInNewTab();
  };
const handlePlayWithFriends = () => {
    if (roomCode.trim() === "") {
      alert("Please enter a room code");
      return;
    }
   openEducaplayInNewTab();
  }
  // Track which section is open
  const [openSection, setOpenSection] = useState(null);

  // Settings state
  const [settings, setSettings] = useState({
    username: "student123",
    name: "John Doe",
    language: "English",
  });

  // Toggle section open/close
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);

    
  };
  

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Dashboard</h1>

      {/* Progress Section */}
      <button
        onClick={() => toggleSection("progress")}
        style={{ margin: "5px", padding: "10px" }}
      >
        📊 Progress
      </button>
      {openSection === "progress" && (
        <div style={{ margin: "10px 0", padding: "10px", border: "3px solid #080707ff",fontWeight: 1000}}>
          <p>⏳ Time spent: 2 hrs</p>
          <p>✅ Accuracy: 85%</p>
          <p>📊 Questions solved: 120</p>
        </div>
      )}

      {/* Mode of Play */}
       <div>
      <h3>Mode of Play:</h3>
      <button onClick={handlePlayIndividually}>1.Play Individually</button>

      <div style={{ marginTop: "20px" }}>
        <h4>2.Play with Friends</h4>
        <input
          type="text"
          placeholder="Enter Room Code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handlePlayWithFriends}>Enter Room</button>
      </div>
    </div>

      {/* Study Materials */}
      <button
        onClick={() => toggleSection("materials")}
        style={{ margin: "5px", padding: "10px" }}
      >
        📚 Study Materials
      </button>
      {openSection === "materials" && (
        <div style={{ margin: "10px 0", padding: "10px", border: "3px solid #000000ff", color: "black" }}>
          <ul>
            <li><a href="/pdfs/science.pdf" download>●📕 Science Textbook</a></li>
            <li><a href="/pdfs/math.pdf" download>●📘 Math Textbook</a></li>
            <li><a href="/pdfs/engineering.pdf" download>●📗 Engineering Notes</a></li>
            <li><a href="/pdfs/technology.pdf" download>●📙 Technology Guide</a></li>
          </ul>
        </div>
      )}

      {/* Settings */}
      <button
        onClick={() => toggleSection("settings")}
        style={{ margin: "5px", padding: "10px" }}
      >
        ⚙️ Settings
      </button>
      {openSection === "settings" && (
        <div style={{ margin: "10px 0", padding: "10px", border: "3px solid #000000ff" }}>
          <label>
            Username :
            <input
              type="text"
              value={settings.username}
              onChange={(e) =>
                setSettings({ ...settings, username: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Full Name :  
            <input
              type="text"
              value={settings.name}
              onChange={(e) => setSettings({ ...settings, name: e.target.value })}
            />
          </label>
          <br />
          <label>
            Language :
            <select
              value={settings.language}
              onChange={(e) =>
                setSettings({ ...settings, language: e.target.value })
              }
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Telugu</option>
              <option>Tamil</option>
            </select>
          </label>
        </div>
      )}

      
    </div>
  );
}
