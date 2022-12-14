import React from "react";
import SEO from "../common/SEO";
import Copyright from "../common/footer/Copyright";
import AboutFive from "../elements/about/AboutFive";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import Separator from "../elements/separator/Separator";
import Contact from "../elements/contact/Contact";
import GalleryOne from "../elements/gallery/GalleryOne";

const CumpleData = [
  {
    id: "01",
    image: "./images/portfolio/1.png",
    popupLink: ["./images/portfolio/1.png"],
  },
  {
    id: "02",
    image: "./images/portfolio/2.png",
    popupLink: ["./images/portfolio/2.png"],
  },
  {
    id: "03",
    image: "./images/portfolio/3.png",
    popupLink: ["./images/portfolio/3.png"],
  },
  {
    id: "04",
    image: "./images/portfolio/4.png",
    popupLink: ["./images/portfolio/4.png"],
  },
  {
    id: "05",
    image: "./images/portfolio/5.png",
    popupLink: ["./images/portfolio/5.png"],
  },
  {
    id: "06",
    image: "./images/portfolio/6.png",
    popupLink: ["./images/portfolio/6.png"],
  },
];

const PersonalPortfolio = () => {
  return (
    <>
      <SEO title="Cumpleaños" />
      <main className="page-wrapper">
        {/* Start Slider Area  */}
        <div
          className="slider-perosonal-portfolio height-750 bg_image"
          data-black-overlay="1"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/delfi10.png)`,
          }}
        >
          {/* <div className="container">
            <div className="row row--30 align-items-center">
              <div className="col-12">
                <div className="inner text-center">
                  <h1 className="title">Hola! Soy Delfi</h1>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* End Slider Area  */}

        <AboutFive />

        {/* Start Portfolio Area  */}
        <div className="rwt-portfolio-area rn-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  //   subtitle="Project"
                  title="Misa"
                  description="Sábado 17/12/22 a 18.30 en Basílica Nuestra Sra. de La Merced <br />
                              24 de Septiembre 253 S.M de Tucumán"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area  */}

        <div className="row mb--20">
          <div className="col-lg-12">
            <SectionTitle
              textAlign="text-center"
              radiusRounded=""
              subtitle="Mi Cumple"
              title="Algunas fotos mias."
            />

            <div
              className="row mt_dec--30 row--15"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {CumpleData.map((item) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                  key={item.id}
                >
                  <GalleryOne galleryItem={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Start Portfolio Area  */}
        <div className="rwt-portfolio-area rn-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  title="Vestimenta!"
                  description="Elegante Sport, y te recomendamos una segunda muda de ropa, <br /> ya que puede que alguien te empuje a la pileta"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area  */}

        <Separator />
        {/* Start Elements Area  */}
        <div className="rwt-testimonial-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb--10">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Mis Amigas"
                  title="Que dicen mis amigas de mi?"
                  description="veamos..."
                />
              </div>
            </div>
            <TestimonialOne
              column="col-lg-4 col-md-6 col-12 mt--30"
              teamStyle="card-style-default testimonial-style-one"
            />
          </div>
        </div>
        {/* End Elements Area  */}

        {/* Start Portfolio Area  */}
        <div className="rwt-portfolio-area rn-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  title="Regalos"
                  description="Si queres hacerme un regalo y no se te ocurre que puede ser <br />
                              te dejo este cbu 1430001713019616740015  <br />
                              Gracias!! "
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area  */}

        <Separator />

        <Contact />
        <Copyright />
      </main>
    </>
  );
};
export default PersonalPortfolio;
