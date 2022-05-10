import React from "react";
import { Link } from "react-router-dom";
//import "../styles/home.css";

const NavMenus = () => {
    return (
        <div className="btnsMenu-nav"> { /** btns para dirigirse a cierto menu */ }
            <label className="menu-category-text">Choose a menu category:</label>
            <button className="breakfastMenu"><Link to="">Breakfast Menu</Link></button>
            <button className="lunchMenu"><Link to="">Lunch Menu</Link></button>
        </div>
    );
}

export default NavMenus;