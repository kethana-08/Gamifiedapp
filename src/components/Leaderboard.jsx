// src/components/Leaderboard.jsx
import React, { useState } from "react";

export default function Leaderboard() {
  const [mode, setMode] = useState("individual");
  const [showChat, setShowChat] = useState(false);

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
      <div style={{ marginBottom: "20px" }}>
        <h2>Mode of Play</h2>
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="individual">Play Individually</option>
          <option value="group">Play with Friends</option>
        </select>

        {mode === "group" && (
          <div style={{ marginTop: "10px" }}>
            <input type="text" placeholder="Enter Room Code" />
            <button>Enter</button>
            <button>Create Room</button>
          </div>
        )}
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
            Username:
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
            Full Name:
            <input
              type="text"
              value={settings.name}
              onChange={(e) => setSettings({ ...settings, name: e.target.value })}
            />
          </label>
          <br />
          <label>
            Language:
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

      {/* Chatbot Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#007bff",
          color: "white",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={() => setShowChat(!showChat)}
      >
        💬
      </div>

      {/* Chatbot Window */}
      {showChat && (
        <div
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            width: "300px",
            height: "400px",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <h3>Chatbot 🤖</h3>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              height: "300px",
              border: "1px solid #ddd",
              padding: "5px",
              marginBottom: "10px",
            }}
          >
            <p>Hello! How can I help you?</p>
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
      )}
    </div>
  );
}
