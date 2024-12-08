import React from "react";
import "./App.css";
import Input from './Input'
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
        <div className="image-section">
          <img
            src="/assets/student.png"
            alt="Student"
            className="student-image"
          />
        </div>

        <div className="text-section">
          <h1>
            Grow Your Skills <br />
            To Advance Your <br />
            Career Path.
          </h1>
          <p>We have something big for you who want to level up!</p>
          <Input/>
          <div className="suggestions">
            <span>Suggestions:</span>
            <button className="active">UI UX Design</button>
            <button className="active">CSS Fundamental</button>
            <button className="active">3D Design Illustration</button>
            <button className="active">Website Development</button>
            <button className="active">Logo Design</button>
            <button className="active">Icon Design</button>
          </div>
        </div>
      </main>
    
    </div>
  );
}


export default App;
