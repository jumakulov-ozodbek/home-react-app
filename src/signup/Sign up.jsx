// Install required dependencies before starting:
// npm install react-icons

import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

const SignUpForm = () => {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('weak');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Password strength logic
    if (value.length < 6) {
      setPasswordStrength('weak');
    } else if (value.length < 10) {
      setPasswordStrength('fair');
    } else {
      setPasswordStrength('strong');
    }
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 'weak':
        return 'bg-red-500';
      case 'fair':
        return 'bg-yellow-500';
      case 'strong':
        return 'bg-green-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-100 rounded-lg p-8 shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign up</h2>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border-b border-gray-400 pb-1">
              <AiOutlineMail className="text-gray-500 mr-2" size={20} />
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full outline-none bg-transparent text-gray-800"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border-b border-gray-400 pb-1">
              <AiOutlineLock className="text-gray-500 mr-2" size={20} />
              <input
                type="password"
                id="password"
                placeholder="Your password"
                className="w-full outline-none bg-transparent text-gray-800"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            {/* Password Strength Indicator */}
            <div className="mt-2 h-2 w-full bg-gray-300 rounded-full">
              <div
                className={`h-full rounded-full ${getStrengthColor()}`}
                style={{ width: passwordStrength === 'weak' ? '33%' : passwordStrength === 'fair' ? '66%' : '100%' }}
              ></div>
            </div>
            <p className="text-xs mt-1 text-gray-500">
              {passwordStrength === 'weak' && <span className="text-red-500">weak</span>}
              {passwordStrength === 'fair' && <span className="text-yellow-500">fair</span>}
              {passwordStrength === 'strong' && <span className="text-green-500">strong</span>}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
