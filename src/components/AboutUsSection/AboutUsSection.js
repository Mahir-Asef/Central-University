import React from 'react';
import { Container, } from "react-bootstrap";
import './AboutUsSection.css'

const AboutUsSection = () => {
  return (
    <div>
      <Container>
        <h1 className="page-title text-center ">About Us</h1>

        <div className="d-flex align-items-center">
          <div>
            <img className="about-us-img" src="images/about-us.png" alt="" />
          </div>
          <div className="mb-5">
          <p className="details">“... to disseminate and advance knowledge by providing instructional and research facilities in such branches of learning as it may deem fit; to make special provision for integrated courses in humanities, social sciences, science and technology in its educational programmes; to take appropriate measures for promoting innovations in teaching-learning process and inter-disciplinary studies and research; to educate and train manpower for the development of the country; to establish linkages with industries for the promotion of science and technology"</p>
            <p className="details">The university welcomes persons without any discrimination irrespective of caste, creed, gender, race or class. The university does not take any unlawful step, adopt or impose on any person, any test whatever of religious belief</p>
            <p className="details">To achieve the above mentioned objectives, some immediate goals of regional and national relevance have been identified by the university. There are continuous endeavours to evolve policies and programmes, which will make distinct additions to the national resources to promoting higher education and research.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSection;