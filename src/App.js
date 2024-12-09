import React, { useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="What do you want to learn..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-[90%] px-8 py-4 text-gray-300 bg-[#282B57] rounded-md shadow-md "
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="absolute left-[80%] top-1/2 transform -translate-y-1/2 text-gray-400 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 rounded-md bg-[#282B57] "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1111.68 3.39l4.36 4.37a1 1 0 01-1.42 1.42l-4.37-4.36A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#1F2143] text-white">
      <header className="flex justify-between items-center p-6 container mx-auto">
        <div className="text-2xl font-bold text-white">NexLearn</div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Courses</li>
            <li className="hover:text-blue-500 cursor-pointer">Pricing</li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <span className="text-lg">Eng 🌐</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      </header>

      <main className="container mx-auto flex items-center px-6 py-12">
        {/* Chap tomondagi rasm */}
        <div className="w-1/2">
          <img
            src="/assets/student.png"
            alt="Student"
            className="max-w-full h-auto object-contain"
          />
        </div>
        <div className="w-1/2 space-y-6 pl-12">
          <h1 className="text-5xl font-bold leading-tight">
            Grow Your Skills <br />
            To Advance Your <br />
            Career Path.
          </h1>
          <p className="text-xl text-gray-400">
            We have something big for you who want to level up!
          </p>

          <div className="w-full max-w-xl">
            <SearchInput />
          </div>

          <div className="space-y-8">
            <span className="block text-gray-400">Suggestions:</span>
            <div className="flex  flex-wrap gap-4  mt-8">
              {[
                "UI UX Design",
                "CSS Fundamental",
                "3D Design Illustration",
                "Website Development",
                "Logo Design",
                "Icon Design",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  className=" text-gray-300 px-3 py-2 border border-gray-300 rounded-md  bg-[#282B57] p-4 text-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
