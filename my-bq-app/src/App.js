import React, {useState} from 'react';
import { Routes, Route, /* useNavigate*/ } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BreakfastPage from './pages/BreakfastPage';
import LunchPage from './pages/LunchPage';
import NavMenus from './components/NavMenus';
import './styles/App.css';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const onPress = () => {
    setIsVisible(!isVisible);
  };

  //const navigate = useNavigate(); 
  return (
    <div className="App">
      <NavMenus onPress={() => onPress()} />
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path= "breakfast-menu" element = {<BreakfastPage />} />
        <Route path= "lunch-menu" element = {<LunchPage />} />
      </Routes>
    </div>
  );
}

export default App;
