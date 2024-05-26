import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Our service philosophy is built on the precepts of commitment to clinical protocols, provision of compassionate care and service excellence that transcends the conventional healthcare offer. Recognising that service excellence is dynamic in nature, we continuously seek to enhance our service delivery in a bid to provide you – our customers – with world-class healthcare experiences.
          This drive for excellence has seen us claim many “firsts” in the industry in both clinical as well non-clinical areas. As a firm believer that excellence in healthcare is a combination of excellence in clinical and non-clinical care, Lanka Hospitals has strived at every opportunity to up its game across the service continuum. Whilst our clinical excellence is driven by international alliances with some of the most reputed global healthcare providers in securing knowledge transfer and sharing of best practices, our excellence in non-clinical care stems from a meticulous drive for quality and continuous improvement.
          </p>
          <h3>Vision Statement</h3>
          <p>“To be the foremost and preferred Private Healthcare Facility in the Country, which will serve the Nation and her People to build a healthier community.”</p>
          <h3>Mission Statement</h3>
          <p>
          “To maintain exceptional and compassionate quality while offering cost effective healthcare solutions of international standards.“
          </p>

          
        </div>
      </div>
    </>
  );
};

export default Biography;
