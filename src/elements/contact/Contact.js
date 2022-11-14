import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";

const Contact = () => {
  return (
    <>
      {/* <SEO title="Contact || " /> */}
      <Layout>
        <div className="main-content">
          {/* Start Contact Area  */}
          <div className="rwt-contact-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb--40">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Te espero!!"
                    title="Confirma tu asistencia"
                    description=""
                  />
                </div>
              </div>
              {/* <ContactOne /> */}
              <div className="row mt--40 row--15">
                <div className="col-lg-12">
                  <ContactForm formStyle="contact-form-1" />
                </div>
                {/* <div className="col-lg-5 mt_md--30 mt_sm--30">
                    <GoogleMapStyle />
                </div> */}
              </div>
            </div>
          </div>
          {/* End Contact Area  */}
        </div>
      </Layout>
    </>
  );
};
export default Contact;
