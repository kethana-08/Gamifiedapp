import React, { useState } from "react";

export default function Leaderboard() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  // Handle sending message
  const handleSend = () => {
    if (!input.trim()) return; // ignore empty input

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Save input value before clearing
    const userText = input;
    setInput("");

    // Fake bot reply after 1 sec
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "You said: " + userText },
      ]);
    }, 1000);
  };

  return (
    <div>
      <h1>Leaderboard</h1>

      {/* Floating Chat Button */}
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

      {/* Chat Window */}
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
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>Chatbot 🤖</h3>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              border: "1px solid #ddd",
              padding: "5px",
              marginBottom: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <p
                key={index}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  color: msg.sender === "user" ? "blue" : "black",
                  margin: "5px 0",
                }}
              >
                {msg.text}
              </p>
            ))}
          </div>

          {/* Input + Send Button */}
          <div style={{ display: "flex", gap: "5px" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{ flex: 1, padding: "5px" }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: "5px 10px",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
