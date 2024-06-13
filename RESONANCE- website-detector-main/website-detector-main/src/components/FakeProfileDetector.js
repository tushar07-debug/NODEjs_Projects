// src/components/FakeProfileDetector.js
import React, { useState } from 'react';
import '../styles/FakeProfileDetector.css';

function FakeProfileDetector() {
  const [username, setUsername] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const checkProfile = () => {
    // Validate that the username is not empty
    if (!username.trim()) {
      setError('Please enter a username before checking.');
      setResult('');
      return;
    }

    // Check if the username contains "fake" or starts with numbers or special characters
    if (
      username.toLowerCase().includes('fake') ||
      /^\d/.test(username) || // Starts with a number
      /^[^a-zA-Z0-9]/.test(username) // Starts with a special character
    ) {
      setResult('Potential fake profile');
      setError('');
    } else {
      setResult('Likely genuine profile');
      setError('');
    }
  };

  return (
    <div>
      <h2>Fake Profile Detector</h2>
      <div id="profile-checker">
        <label htmlFor="username">Enter the username:</label>
        <input
          type="text"
          id="username"
          placeholder="Type the username here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={checkProfile}>Check Profile</button>
        <p id="error">{error}</p>
        <p id="result">{result}</p>
      </div>
    </div>
  );
}

export default FakeProfileDetector;
