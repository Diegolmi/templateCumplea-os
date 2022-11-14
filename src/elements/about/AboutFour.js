import React from "react";
import VideoTwo from "../video/VideoTwo";
import { FiCheck } from "react-icons/fi";

const PopupData = [
  {
    id: "01",
    image: "./images/bg/cervezas.jpg",
    popupLink: ["https://www.youtube.com/watch?v=0auqM_zFyl8"],
  },
];

const AboutFour = ({ image }) => {
  return (
    <div className="about-area about-style-4 rn-section-gap">
      <div className="container">
        <div className="row row--40 align-items-center">
          <div className="col-lg-6">
            {PopupData.map((item) => (
              <div className="video-btn" key={item.id}>
                <VideoTwo imagename={`${image}`} galleryItem={item} />
              </div>
            ))}
          </div>
          <div className="col-lg-6 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="inner">
                <h3 className="title">¡Bienvenidos!</h3>
                <ul className="feature-list">
                  <li>
                    {/* <div className="icon">
                      <FiCheck />
                    </div> */}
                    <div className="title-wrapper">
                      <span>
                        ¡Bienvenido a nuestro sitio web! Con más de 6 años de
                        historias dentro de nuestras paredes, continuamos
                        ofreciendo una experiencia diferente en Tucumán. Primera
                        cervecería artesanal en la provincia, con una amplia
                        variedad de cervezas artesanales, un menú PARA TODOS LOS
                        GUSTOS y coctelería de primera calidad, nuestros bares
                        ofrecen una experiencia única, promociones especiales,
                        eventos temáticos y UN SERVICIO DE EXCELENCIA. ¡En
                        nuestra WEB podrás consultar nuestro menú, promociones,
                        realizar tus reservas o ponerte en comunicación con
                        nosotros! Te invitamos a conocernos más y a vivir la
                        <span> #ExperienciaPBH</span> en nuestras sucursales.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
