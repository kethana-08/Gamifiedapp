import React, { useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);
  const [mission, setMission] = useState("");

  const openModal = (title) => {
    setMission(title);
    setOpen(true);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="modal-backdrop fixed inset-0"
            onClick={() => setOpen(false)}
          ></div>
          <div className="relative game-card rounded-2xl p-8 max-w-lg w-full m-4 text-center">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✖
            </button>
            <h2 className="text-3xl font-bold mb-4 text-cyan-300">
              Mission Briefing: {mission}
            </h2>
            <p className="text-5xl font-bold my-8 text-white">Coming Soon!</p>
            <p className="text-gray-300">
              This mission is currently under development by our top scientists.
              Check back soon, Cosmic Learner!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
