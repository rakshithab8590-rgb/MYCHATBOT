import React, { useState, useEffect } from "react";
import "./ChatScreen.css";

export default function ChatScreen({ mode }) {

  // ✅ FIRST: helper function
  function getInitialMessage(type) {
    switch (type) {
      case "course":
        return "📘 Which subject do you need help with?";

      case "deadline":
        return "⏰ Let me check your upcoming assignments.";

      case "progress":
        return "🏆 Let’s review your learning progress.";

      default:
        return "Hi 👋 I'm your LMS assistant!";
    }
  }

  // ✅ SECOND: useState
  const [messages, setMessages] = useState([
    { sender: "bot", text: getInitialMessage(mode) }
  ]);

  const [input, setInput] = useState("");

  // ✅ THIRD: useEffect
  useEffect(() => {
    setMessages([
      { sender: "bot", text: getInitialMessage(mode) }
    ]);
  }, [mode]);



  // ✅ Send message
  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { sender: "user", text: input },
      {
        sender: "bot",
        text: "Thanks! I’m processing your request..."
      }
    ];

    setMessages(newMessages);
    setInput("");
  };



  return (
    <div className="chat-screen">

      <div className="chat-area">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.sender === "user" ? "msg user" : "msg bot"}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={sendMessage}>➤</button>
      </div>

    </div>
  );
}