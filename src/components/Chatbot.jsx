import React, { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Greetings, Galaxian7! How can I assist you? Try typing 'help'.",
    },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setOpen(!open);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Bot response logic (from your Leaderboard version)
    let response =
      "My apologies, I am still in training. Try 'help' for a list of commands.";
    const lower = input.toLowerCase();
    if (lower.includes("help")) {
      response =
        "I can help with: \n- Missions: Learn about the games. \n- Coins: Understand how to earn currency.";
    } else if (lower.includes("mission")) {
      response =
        "Missions are STEM-based games designed to test your skills. Launch one from the main grid to start learning!";
    } else if (lower.includes("coin")) {
      response =
        "You earn coins by completing missions and achieving high scores.";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: response }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {open && (
        <div className="chat-window w-80 h-96 bg-indigo-900/80 backdrop-blur-md rounded-xl border border-purple-600 flex flex-col shadow-2xl origin-bottom-right mb-20 open">
          {/* Header */}
          <div className="p-3 border-b border-purple-600 flex justify-between items-center">
            <h3 className="font-bold text-white">Cosmic Assistant</h3>
            <button onClick={toggleChat} className="text-gray-400 hover:text-white">
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-3 overflow-y-auto chat-messages">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.from === "user" ? "text-right" : "text-left"}
              >
                <div
                  className={`p-2 rounded-lg inline-block max-w-xs break-words ${
                    m.from === "user"
                      ? "bg-cyan-600 text-white"
                      : "bg-purple-800 text-white"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="p-3 border-t border-purple-600 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full bg-gray-900/50 border border-purple-500 rounded-full px-4 py-2 text-sm text-white"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 p-2 rounded-full text-gray-900"
            >
              ➤
            </button>
          </form>
        </div>
      )}

      {/* Floating FAB */}
      <button
        onClick={toggleChat}
        className="chatbot-fab w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
      >
        🤖
      </button>
    </div>
  );
}
