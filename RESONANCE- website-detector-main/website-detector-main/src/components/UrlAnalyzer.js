// src/components/UrlAnalyzer.js
import React, { useState } from 'react';
import '../styles/UrlAnalyzer.css';
function UrlAnalyzer() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');

  const analyzeUrl = () => {
    // Placeholder for URL analysis (replace with actual implementation)
    const isFake = Math.random() < 0.5;

    if (isFake) {
      setResult('The provided URL is fake.');
    } else {
      setResult('The provided URL is safe. Opening in the browser...');
      // Open the URL in the browser
      window.open(url, '_blank');
    }
  };

  return (
    <div>
      <h2>URL Analyzer</h2>
      <form onSubmit={(e) => { e.preventDefault(); analyzeUrl(); }}>
        <label htmlFor="url">Enter URL:</label>
        <input
          type="text"
          id="url"
          name="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Analyze</button>
      </form>
      <div id="result">{result}</div>
    </div>
  );
}

export default UrlAnalyzer;
