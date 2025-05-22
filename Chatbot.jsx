import React, { useState } from "react";
import qaData from "./chatbot_qa.json";
import "./Chatbot.css";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    const question = input.trim().toLowerCase();
    const match = qaData.find(q =>
      question.includes(q.question.toLowerCase())
    );
    setChat([...chat, { user: input, bot: match ? match.answer : "Sorry, I can only answer questions about my background, skills, projects, and contact info." }]);
    setInput("");
  };

  return (
    <div className="chatbot">
      <h3>Ask me about my background, skills, or projects!</h3>
      <div className="chat-window">
        {chat.map((c, i) => (
          <div key={i}>
            <b>You:</b> {c.user}<br />
            <b>Bot:</b> {c.bot}
          </div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type your question..." />
      <button onClick={handleSend}>Send</button>
    </div>
  );
} 