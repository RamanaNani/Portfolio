import React from "react";
import Chatbot from "./Chatbot";
import about from "./about.json";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 800, margin: "auto", padding: 24 }}>
      <h1>{about.name}</h1>
      <p>{about.tagline}</p>
      <section>
        <h2>About</h2>
        <p>{about.summary}</p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          {about.projects.map((proj, idx) => (
            <li key={idx}>
              <b>{proj.title}</b>: {proj.description}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Contact & Chatbot</h2>
        <Chatbot />
      </section>
    </div>
  );
}

export default App; 