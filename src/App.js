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
          <form className="relative max-w-md mx-auto">
      <input
        type="search"
        placeholder="What do you want to learn..."
        className="w-full p-4 pl-6 pr-12 text-sm text-gray-300 bg-gray-800 border-none rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </button>
    </form>
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
      </main>
    </div>
  );
}


export default App;
