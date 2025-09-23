// src/components/Landing.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");

  const languages = [
    "English",
    "Hindi",
    "Telugu",
    "Tamil",
    "Kannada",
    "Marathi",
    "Gujarati",
    "Bengali",
  ];

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1 style={{ animation: "bounce 2s infinite" }}>🎮 Gamified Learning</h1>
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </select>
      </div>
      <button
        style={{ marginTop: "50px" , padding: "10px 20px", fontSize: "30px" }}
        onClick={() => navigate("/login")}
      >
        Start
      </button>
    </div>
  );
}
