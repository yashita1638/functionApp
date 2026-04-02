import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const API_BASE = process.env.REACT_APP_API_URL;
console.log("API Base URL:", API_BASE);
  const callFunction = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/hello?name=Yashi`);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Error calling function");
      console.error("Function call failed:", error);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>React + Azure Function Demo</h1>
      <p>This is a tiny app to understand Function Apps.</p>
      <button onClick={callFunction}>Call Backend Function</button>
      <p style={{ marginTop: "20px" }}>{message}</p>
    </div>
  );
}

export default App;
