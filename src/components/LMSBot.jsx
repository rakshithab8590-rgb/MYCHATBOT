import React, { useState } from "react";
import "./LMSBot.css";
import ChatScreen from "./ChatScreen";

export default function LMSBot() {
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState("welcome"); 
// welcome | loading | chat
  const [selectedFeature, setSelectedFeature] = useState(null);

const handleFeature = (type) => {
  setSelectedFeature(type);
  setScreen("chat");
};

  return (
    <>
      {/* Floating Button */}
      <div className="bot-float" onClick={() => setOpen(!open)}>
        💬
        <span className="status-dot"></span>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="bot-container">

          {/* Header */}
          <div className="bot-header">

            <div>
              <h3>LMS Bot ✨</h3>
              <span className="online">Online • Ready to help</span>
            </div>

            <button onClick={() => {
              setOpen(false);
              setScreen("welcome");
            }}>
              ✖
            </button>

          </div>

          {/* Body */}
          {screen === "welcome" ? (

            <div className="bot-body">

              <div className="bot-logo">
  <img
    src="/robo.png"
    alt="AI Bot"
    className="bot-image"
  />
</div>

              <h2>LMS Bot</h2>

              <p className="desc">
                Your intelligent learning companion.
                Get instant help with courses and assignments.
              </p>

             <Feature
  icon="📘"
  title="Course Assistant"
  text="Access materials & resources"
  onClick={() => handleFeature("course")}
/>

<Feature
  icon="⏰"
  title="Track Deadlines"
  text="Never miss an assignment"
  onClick={() => handleFeature("deadline")}
/>

<Feature
  icon="🏆"
  title="Monitor Progress"
  text="Check grades & performance"
  onClick={() => handleFeature("progress")}
/>

 <button
  className="start-btn"
 onClick={() => {
  setScreen("loading");

  setTimeout(() => {
    setScreen("chat");
  }, 2500);
}}
>
  Start Conversation →
</button>

            </div>

          ) : screen === "loading" ? (

  <div className="loading-screen">

    <div className="loading-logo">
      <img src="/robo.png" alt="AI" />
      <span className="star">✨</span>
    </div>

    <h2>Connecting to LMS Bot</h2>
    <p>Preparing your personalized experience...</p>

    <div className="loading-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="loading-bar">
      <div></div>
    </div>

    <div className="loading-box">
      <p>🟢 Initializing AI assistant...</p>
      <p>🟢 Loading your data...</p>
      <p>🔵 Almost ready...</p>
    </div>

  </div>

) : (
  <ChatScreen feature={selectedFeature} />
)}

        </div>
      )}
    </>
  );
}

/* Feature Card */
function Feature({ icon, title, text, onClick }) {
  return (
   <div className="feature-card" onClick={onClick}>
      <span className="icon">{icon}</span>

      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}