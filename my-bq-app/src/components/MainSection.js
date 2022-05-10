import React from "react";
//import "../styles/home.css";

const MainSection = () => {
    return (
                <div className="nameCustomer-btns-nav"> 
                    <div className="btnsMenu-nav"> { /** input para ingresar nombre del cliente */ }
                        <label className="customer-name-text">Type down customer's name:</label>
                        <img src="../assets/person.png" alt="person-img"
                        width={80} height={80} />
                        <input className="customer-name-inp" placeholder="Customer's name"></input>
                        <img src="../assets/check_circle.png" alt="check_circle-img"
                        width={80} height={80} />
                    </div>
                </div>
    );
}

export default MainSection;