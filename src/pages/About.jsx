import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="À propos de nous" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                À propos de nous
                </h2>

                <p className="section__description">
                Cette sensation incroyable – vous démarrez et l'aventure commence...
                </p>

                <p className="section__description">
                Chez Nous, notre obsession, c'est de vous donner la liberté de découvrir davantage. Nous sommes prêts à déplacer des montagnes pour vous trouver la bonne voiture et vous offrir une expérience de location inoubliable, de bout en bout. Ici, vous pouvez en savoir plus sur notre façon de travailler.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Besoin d'aide?</h6>
                    <h4>+212608822773</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default About;
