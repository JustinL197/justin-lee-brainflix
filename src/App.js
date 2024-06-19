import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import VideoDetailsPage from './pages/VideoDetailsPage';
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage/>} />
        <Route path="/video/:id" element={<VideoDetailsPage/>} />
      </Routes>
    </BrowserRouter>
    
  );
}
export default App;
