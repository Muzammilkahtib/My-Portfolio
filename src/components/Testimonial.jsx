import React from "react";
import puc from "../assets/puc.png";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>All Studies</h2>

      <section>
        <TestimonialCard1
          name={"LKG To X"}
          feedback={"St.Thomas English Medium High School Chitguppa-585412"}
        />
        <TestimonialCard2
          name={"PUC"}
          feedback={
            "The City Composite PU College Zam-Zam Colony,Ring Road,Gulbarga-585101"
          }
        />

        <TestimonialCard3
          name={"B.E (CSE)"}
          feedback={"Ghousia College Of Engineering, Ramanagara -562159"}
        />
      </section>
    </div>
  );
};

const TestimonialCard1 = ({ name, feedback }) => (
  <article>
    <img
      src="https://f0.pngfuel.com/png/259/668/saint-thomas-school-st-thomas-high-school-st-thomas-more-school-st-thomas-school-school-png-clip-art.png"
      alt="School"
    />
    <h4>{name}</h4>
    <a href="https://www.google.co.in/maps/place/Saint+Thomas+English+Medium+School/@17.6982543,77.2153785,19z/data=!4m5!3m4!1s0x3bced59535f594b5:0xf43540b44ee71c33!8m2!3d17.697889!4d77.2158513" target={"blank"} > 
      <p>{feedback}</p>
    </a>
  </article>
);
const TestimonialCard2 = ({ name, feedback }) => (
  <article>
    <img
      src={puc}
      alt="Pu College"
    />
    <h4>{name}</h4>
    <a href="https://www.google.co.in/maps/place/The+City+Academy/@17.3517584,76.8614627,19.08z/data=!4m5!3m4!1s0x3bc8c753cc05e9a9:0x147daf0fc724da32!8m2!3d17.3519017!4d76.8621047" target={"blank"} ><p>{feedback}</p></a>
    
  </article>
);
const TestimonialCard3 = ({ name, feedback }) => (
  <article>
    <img
      src="https://image3.mouthshut.com/images/imagesp/925717965s.jpg"
      alt="User"
    />
    <h4>{name}</h4>
    <a href="https://www.google.co.in/maps/place/Ghousia+College+Of+Engineering/@12.7336086,77.2936261,17.68z/data=!4m5!3m4!1s0x3bae4e64edba0f77:0x7064a5a497426bd9!8m2!3d12.7336992!4d77.2934428" target={"blank"} ><p>{feedback}</p></a>
    
  </article>
);

export default Testimonial;
