import React from 'react';
import { Container, Button } from "react-bootstrap";
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div>
      <div className="hero-container">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="text-center">
            <h1 className="main-title text-dark">Welcome To <br/> Central University</h1>
            <h3 className="secondary-title text-light">
            Welcome back to a wonderful year full of learning! Enjoy each day and know that you are surrounded by support.Stay positive, have fun, and keep smiling! You'll do great!
            </h3>
          </div>
          <div >
            <img  src="images/hero.png" alt="" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;