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
          <form className="max-w-md mx-auto ">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-500 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="What do you want to learn..."
            required
          />
          {/* Input search icons */}
          <div className="text-white absolute end-2 bottom-3 search__div cursor-pointer">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          {/* Input search icons */}
        </div>
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
