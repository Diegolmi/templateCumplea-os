import React from 'react';
import { FiClock, FiMapPin, FiDatabase, FiMail } from "react-icons/fi";


const AboutFive = () => {
    return (
        <div className="about-style-5 rn-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row row--0 about-wrapper align-items-center theme-shape">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img src="./images/about/delfi11.png" alt="Delfina con celular" />
                                </div>
                            </div>
                            <div className="col-lg-6 mt_md--30 mt_sm--30">
                                <div className="content">
                                    <div className="inner">
                                        <h4 className="title">Esta es tu Invitación</h4>
                                        <p>Vení a festejar mi cumple!</p>
                                        <ul className="contact-address">
                                            <li><FiDatabase /> Domingo 18 de Diciembre</li>
                                            <li><FiClock /> 14 hs</li>
                                            <li><FiMapPin /> En Tafi Viejo. Diagonal Ruta Provincial 314 </li>
                                            <li><FiMail /> Confirmame tu presencia enviando un mensaje aqui abajo</li>
                                        </ul>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutFive;