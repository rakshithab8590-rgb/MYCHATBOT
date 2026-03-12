import React, { useState } from "react";
import "./ChatScreen.css";

export default function ChatScreen() {

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I'm your LMS assistant Yukthi! How can I help you today?" }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { sender: "user", text: input },
      { sender: "bot", text: "Thanks! I’m processing your request..." }
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage}>➤</button>
      </div>

    </div>
  );
}