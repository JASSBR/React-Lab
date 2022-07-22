import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import usericon from "../../assets/all-images/usericon.png";


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Merci pour votre professionnalisme et votre enthousiasme. Bon courage à vous.                                                       
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={usericon} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ahmed Belbachir</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Vraiment la vraie surprise . Bravo team, Qualite d assistance, qualité d expertise et suivi rigoureux de votre dossier.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={usericon} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Soufiane alaoui</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Excellent service. Rapide et efficace ! Je recommande Merci à l'équipe                                                           
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={usericon} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Nisrine Hettab</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Équipe sérieuse, professionnelle à l’écoute.ils m’a accompagnée pendant toute la procédure d’achat et j’en suis très satisfaite
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={usericon} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Meryem bennani</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
