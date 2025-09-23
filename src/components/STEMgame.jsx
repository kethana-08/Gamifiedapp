import React, { useState } from "react";

export default function STEMGame() {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { id: "science", name: "Science Quiz" },
    { id: "technology", name: "Technology Quiz" },
    { id: "engineering", name: "Engineering Quiz" },
    { id: "math", name: "Mathematics Quiz" },
  ];

  const sampleQuestions = {
    science: [
      { q: "What is H2O?", a: "Water" },
      { q: "What planet is known as the Red Planet?", a: "Mars" },
    ],
    technology: [
      { q: "What does HTML stand for?", a: "HyperText Markup Language" },
      { q: "What is the brain of the computer?", a: "CPU" },
    ],
    engineering: [
      { q: "What does CAD stand for?", a: "Computer-Aided Design" },
      { q: "Which bridge type uses cables?", a: "Suspension Bridge" },
    ],
    math: [
      { q: "What is 12 × 8?", a: "96" },
      { q: "What is the square root of 81?", a: "9" },
    ],
  };

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (id, ans) => {
    setAnswers((prev) => ({ ...prev, [id]: ans }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎮 STEM Games</h1>

      {!selectedGame ? (
        <div>
          <h2>Select a Subject:</h2>
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setSelectedGame(game.id)}
              style={{
                margin: "10px",
                padding: "10px 20px",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {game.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>{games.find((g) => g.id === selectedGame).name}</h2>

          {sampleQuestions[selectedGame].map((q, index) => (
            <div key={index} style={{ margin: "10px 0" }}>
              <p>
                <strong>Q{index + 1}: {q.q}</strong>
              </p>
              <input
                type="text"
                placeholder="Your Answer"
                value={answers[index] || ""}
                onChange={(e) => handleAnswer(index, e.target.value)}
              />
            </div>
          ))}

          <button
            onClick={handleSubmit}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>

          {submitted && (
            <div style={{ marginTop: "20px" }}>
              <h3>Results ✅</h3>
              {sampleQuestions[selectedGame].map((q, index) => (
                <p key={index}>
                  {q.q} <br />
                  Your Answer: {answers[index] || "Not answered"} <br />
                  Correct Answer: {q.a}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
