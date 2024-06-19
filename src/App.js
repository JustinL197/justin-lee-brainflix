import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import UploadPage from './Pages/UploadPage';
import VideoDetailsPage from './Pages/VideoDetailsPage';
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
