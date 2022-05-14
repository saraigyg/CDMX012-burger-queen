import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, /* useNavigate*/ } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import BreakfastPage from './pages/BreakfastPage.jsx';
import LunchPage from './pages/LunchPage.jsx';
import './styles/App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const onPress = () => {
    setIsVisible(!isVisible);
    //const navigate = useNavigate(); 
  };
  return (
    <section className="App">
      <Router>
        <Routes>
        <Route index element={<HomePage />} />
        <Route path="breakfast-menu" element={<BreakfastPage />} />
        <Route path="lunch-menu" element={<LunchPage />} />
        </Routes>
      </Router>
    </section>
  ); 
} 

export default App;
