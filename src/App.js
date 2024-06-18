import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import UploadPage from './Pages/UploadPage';
import VideoDetailsPage from './Pages/VideoDetailsPage';
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="/video/:id" element={<VideoDetailsPage />} />
      </Routes>
    </Router>
  )
}
export default App;
