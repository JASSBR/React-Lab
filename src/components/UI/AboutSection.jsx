import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">À propos de nous</h4>
              <h2 className="section__title">Bienvenue à Notre service de location de voitures</h2>
              <p className="section__description">
              La location d'une voiture, c'est la liberté... et nous sommes là pour vous aider à dénicher le véhicule idéal à un prix défiant toute concurrence. Mais ce n'est pas tout : nous œuvrons pour faire de la location d'une voiture une expérience tout en douceur, voire inoubliable.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line" style={{ marginTop: "-3.5rem" }}></i> Nous savons que le service dont vous bénéficiez importe au plus haut point
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line" style={{ marginTop: "-3.5rem" }}></i> Nous travaillons avec des sociétés de location de voitures partout dans le monde
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Et nous restons avec vous à chaque étape
                </p>

                
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
