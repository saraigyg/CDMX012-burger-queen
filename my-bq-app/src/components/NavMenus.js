import React from "react";
import { Link } from "react-router-dom";
//import "../styles/home.css";

const NavMenus = () => {
    return (
        <><div className="home-navmenu"> {/* imagen de fondo*/}
            <div className="home-navmenu-brand"> {/* recuadro blanco de fondo*/}
                <div className="home-logo-slogan-brand"> {/* recuadro negro de fondo*/}
                    <div className="home-title-brand">
                        <img src="../assets/olive.png" alt="olive-img"
                        width={80} height={80} />
                        <label className="home-title">Burger Queen</label>
                    </div>
                    <div className="home-slogan-brand">
                        <label className="home-slogan">Let's eat the queen together!</label>
                        <img src="../assets/burger.png" alt="burger-img"
                        width={80} height={80} />
                    </div>
                </div>
                <div className="nameCustomer-btns-nav"> 
                    <div className="btnsMenu-nav"> { /** input para ingresar nombre del cliente */ }
                        <label className="customer-name-text">Type down customer's name:</label>
                        <img src="../assets/person.png" alt="person-img"
                        width={80} height={80} />
                        <input className="customer-name-inp" placeholder="Customer's name"></input>
                        <img src="../assets/check_circle.png" alt="check_circle-img"
                        width={80} height={80} />
                    </div>
                    <div className="btnsMenu-nav"> { /** btns para dirigirse a cierto menu */ }
                        <label className="menu-category-text">Choose a menu category:</label>
                        <button className="breakfastMenu"><Link to="">Breakfast Menu</Link></button>
                        <button className="lunchMenu"><Link to="">Lunch Menu</Link></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default NavMenus;