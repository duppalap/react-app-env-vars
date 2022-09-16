import React from "react";

const { NODE_ENV } = process.env;

const API_URL =
  NODE_ENV === "production"
    ? window.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL;

function App() {
  return (
    <div>
      <ul>
        <li>My env: {NODE_ENV}</li>
        <li>API: {API_URL}</li>
      </ul>
    </div>
  );
}

export default App;
