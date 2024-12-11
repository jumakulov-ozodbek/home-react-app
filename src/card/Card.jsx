import React from 'react';

const PricingCards = () => {
  return (
    <div className="bg-[#0D0E2F] text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
        <div className="flex flex-col lg:flex-row justify-center gap-6">
          <div className="bg-[#131336] rounded-xl p-6 shadow-lg w-full lg:w-1/3 text-center">
            <div className="flex justify-center items-center mb-4">
              <span className="text-green-400 text-3xl">&#9733;</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Free</h3>
            <p className="text-4xl font-bold text-red-400 mb-4">$0 <span className="text-lg font-normal">/ month</span></p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>Learning with free quizzes</li>
              <li>Free documentation of courses</li>
              <li>Unlock 3 material videos</li>
            </ul>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">Your Current Package</button>
          </div>

          {/* Express Plan */}
          <div className="bg-[#131336] rounded-xl p-6 shadow-lg w-full lg:w-1/3 text-center">
            <div className="flex justify-center items-center mb-4">
              <span className="text-blue-400 text-3xl">&#128273;</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Express</h3>
            <p className="text-4xl font-bold text-red-400 mb-4">$14 <span className="text-lg font-normal">/ month</span></p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>Access for all courses' videos</li>
              <li>Asking questions directly mentor</li>
              <li>Downloading videos for free</li>
              <li>Creating your playlist</li>
              <li>15 submissions daily</li>
            </ul>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">Buy Express</button>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#131336] rounded-xl p-6 shadow-lg w-full lg:w-1/3 text-center relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs py-1 px-3 rounded-bl-xl">Popular</div>
            <div className="flex justify-center items-center mb-4">
              <span className="text-orange-400 text-3xl">&#128081;</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Premium</h3>
            <p className="text-4xl font-bold text-red-400 mb-4">$149 <span className="text-lg font-normal">/ annual</span></p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>Access for all courses' videos</li>
              <li>Asking questions directly mentor</li>
              <li>Downloading videos for free</li>
              <li>Creating your playlist</li>
              <li>Unlimited submissions</li>
            </ul>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">Buy Premium</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
