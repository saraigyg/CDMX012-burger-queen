import React, {useState} from 'react';
import mainLogo from'./assets/wallpaper.png';
import oliveLogo from './assets/olive.png';
import burgerLogo from './assets/burgerNoRadius.png';
import { Routes, Route, /* useNavigate*/ } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BreakfastPage from './pages/BreakfastPage';
import LunchPage from './pages/LunchPage';
import NavMenus from './components/NavMenus';
import './styles/App.css';

function App() {
  return (
    <section className="App">
      <img className='mainLogo' src={mainLogo} alt="wallpaper-img" />
      <div className='mainFrame'>
        <div className='secondFrame'>
          <div className='restauBrand'>
            <img src={oliveLogo} alt="olive-img" />
            <label className="home-title">Burger Queen</label>
          </div>
          <div className="home-slogan-brand">
                <label className="home-slogan">Let's eat this <br></br>burger together!</label>
                <img src={burgerLogo} alt="burger-img" />
          </div>
        </div>
      </div>
    </section>
 /* const [isVisible, setIsVisible] = useState(false);

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
    </div> */
  ); 
} 

export default App;
