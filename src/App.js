import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">NexLearn</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Pricing</li>
          </ul>
        </nav>
        <div className="login-section">
          <span>Eng 🌐</span>
          <button className="login-btn">Login</button>
        </div>
      </header>

      <main className="main-content">
        <div className="text-section">
          <h1>
            Grow Your Skills <br />
            To Advance Your <br />
            Career Path.
          </h1>
          <p>We have something big for you who want to level up!</p>
          <div className="search-bar">
            <input type="text" placeholder="What do you want to learn..." />
            <button>🔍</button>
          </div>
          <div className="suggestions">
            <span>Suggestions:</span>
            <button>UI UX Design</button>
            <button>CSS Fundamental</button>
            <button>3D Design Illustration</button>
            <button>Website Development</button>
            <button>Logo Design</button>
            <button>Icon Design</button>
          </div>
        </div>
        <div className="image-section">
          <img
            src="/student.png"
            alt="Student"
            className="student-image"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
