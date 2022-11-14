import React from "react";
import { Link } from "react-router-dom";
import CalltoActionSeven from "../../elements/calltoaction/CalltoActionSeven";
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const footerIntemOne = footerOne[1];

const indexOneLink = footerIntemOne.quicklink;

const FooterTwo = () => {
  return (
    <>
      <footer className="rn-footer footer-style-default variation-two">
        <CalltoActionSeven />
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* Start Single Widget  */}
              {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <h4 className="title">{footerIntemOne.title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {indexOneLink.map((data, index) => (
                        <li key={index}>
                          <Link to={`${data.url}`}>{data.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div> */}

              {/* Start Single Widget  */}
              {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <h4 className="title">Redes Sociales</h4>
                  <div className="inner">
                    <ul className="social-icon social-default justify-content-start">
                      <li>
                        <a
                          href
                          to="https://www.facebook.com/porter.brew.house.barrionorte"
                          target="_blank"
                        >
                          <FiFacebook />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/porter.brew.house/?hl=es"
                          target="_blank"
                        >
                          <FiInstagram />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          href="https://www.linkedin.com/company/porter-brew-house"
                          target="_blank"
                        >
                          <FiLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* End Single Widget  */}
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </>
  );
};

export default FooterTwo;
