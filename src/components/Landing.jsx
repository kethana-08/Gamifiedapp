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
      <h1 style={{ animation: "bounce 2s infinite" }}> Learn-Erena</h1>
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
        style={{ marginTop: "50px",
    width: "100px",        // equal width
    height: "100px",       // equal height
    fontSize: "20px",
    borderRadius: "50%",   // makes it circular
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer"}}
        onClick={() => navigate("/login")}
      >
        Start
      </button>
    </div>
  );
}
