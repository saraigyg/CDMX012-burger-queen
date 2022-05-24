import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/styles/App.css';
import NotFoundPage from './pages/NotFoundPage.jsx';
import RoleFirabase from './components/RoleFirebase.js';

function App() {
  return (
    <><div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RoleFirabase />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div></>
  )
};

export default App;
