// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import UrlAnalyzer from './components/UrlAnalyzer';
import FakeProfileDetector from './components/FakeProfileDetector';
import FakeCommentDetector from './components/FakeCommentDetector';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Website-Detector</h1>
        </header>
        <nav>
        <img src="https://i.pinimg.com/736x/00/66/82/006682ac2760c05d895f7a9628056580.jpg" alt="Logo" />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/fake-profile-detector">Fake Profile Detector</Link></li>
            <li><Link to="/fake-comment-detector">Fake Comment Detector</Link></li>
            <li><Link to="/url-analyzer">URL Analyzer</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/fake-profile-detector" element={<FakeProfileDetector />} />
            <Route path="/fake-comment-detector" element={<FakeCommentDetector />} />
            <Route path="/url-analyzer" element={<UrlAnalyzer />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Website-Detector</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
