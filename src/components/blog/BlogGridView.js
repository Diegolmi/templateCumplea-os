import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import GalleryOne from "../../elements/gallery/GalleryOne";

const PopupData = [
  {
    id: "01",
    image: "./images/portfolio/menu1.png",
    popupLink: ["./images/portfolio/menu1.png"],
  },
  {
    id: "02",
    image: "./images/portfolio/menu2.png",
    popupLink: ["./images/portfolio/menu2.png", "./images/portfolio/menu3.png"],
  },
  {
    id: "03",
    image: "./images/portfolio/menu4.png",
    popupLink: ["./images/portfolio/menu4.png"],
  },
  {
    id: "04",
    image: "./images/portfolio/menu5.png",
    popupLink: ["./images/portfolio/menu5.png"],
  },
  {
    id: "05",
    image: "./images/portfolio/menu6.png",
    popupLink: ["./images/portfolio/menu6.png"],
  },
  {
    id: "06",
    image: "./images/portfolio/menu7.png",
    popupLink: ["./images/portfolio/menu7.png", "./images/portfolio/menu8.png"],
  },
  {
    id: "17",
    image: "./images/portfolio/menu8.png",
    popupLink: ["./images/portfolio/menu8.png"],
  },
  {
    id: "07",
    image: "./images/portfolio/menu9.png",
    popupLink: [
      "./images/portfolio/menu9.png",
      "./images/portfolio/menu10.png",
    ],
  },
  {
    id: "18",
    image: "./images/portfolio/menu10.png",
    popupLink: ["./images/portfolio/menu10.png"],
  },

  {
    id: "08",
    image: "./images/portfolio/menu11.png",
    popupLink: ["./images/portfolio/menu11.png"],
  },
  {
    id: "09",
    image: "./images/portfolio/menu12.png",
    popupLink: ["./images/portfolio/menu12.png"],
  },
  {
    id: "10",
    image: "./images/portfolio/menu13.png",
    popupLink: ["./images/portfolio/menu13.png"],
  },
  {
    id: "11",
    image: "./images/portfolio/menu14.png",
    popupLink: ["./images/portfolio/menu14.png"],
  },
  {
    id: "12",
    image: "./images/portfolio/menu15.png",
    popupLink: ["./images/portfolio/menu15.png"],
  },
  {
    id: "13",
    image: "./images/portfolio/menu16.png",
    popupLink: ["./images/portfolio/menu16.png"],
  },
];
const BlogGridView = () => {
  return (
    <>
      <SEO title="Menu Porter || Porter " />
      <Layout>
        <div className="rn-service-area rn-section-gap ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  description="Con un enfoque en comida americana, nuestro menu cuenta con más <br /> de 50 opciones de platos para satisfacer los gustos de nuestros clientes. <br /> Contamos con alternativas vegetarianas, sin TACC y veggies."
                  title="Conoce nuestro menu completo:"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          {/* Start Blog Area  */}
          <div className="row mt_dec--30 row--15">
            {PopupData.map((item) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                key={item.id}
              >
                <GalleryOne galleryItem={item} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
export default BlogGridView;
