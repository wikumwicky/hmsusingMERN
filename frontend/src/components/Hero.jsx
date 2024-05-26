import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          MediCare Hospital Colombo is an ultra-modern multi-specialty 120 bedded corporate hospital located within the ‘Hospital Zone’ of Narahenpita, Colombo.
          We are committed to providing compassionate and high-quality medical care of international standards with a focus on value based healthcare i.e. providing the best clinical outcomes at optimum cost.
          We also provide the best clinical talent of the country and supplemented it with a highly skilled and competent nursing and technical team, robust support services, a modern infrastructure,the latest medical equipment and diagnostics, with cutting edge technology and a pleasing ambiance.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
