import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import CoursesSection from "../CoursesSection/CoursesSection";
import HeroSection from "../HeroSection/HeroSection";
import Partnership from "../Partnership/Partnership";
import "./Home.css";

const Home = () => {
  return (
    <div>

      {/*========== HERO IMAGE =========*/}

      <HeroSection />

      <div>
        <h1  className="text-center">Introduction</h1>
          <p>There are three general indices of motivation: choice, effort, and persistence. Recognize students' needs for self-determination and autonomy, and provide opportunities for choice and control. Understand that students may be intrinsically and extrinsically motivated to learn. While it may be ideal to have a room full of intrinsically motivated students, it is understandable that students are also driven by the desire for grades, approval and other rewards. Intrinsic and extrinsic motivation exist not a single continuum, but on two separate ones, and students may often have multiple goals for the same course. Students usually direct their behavior toward activities that they value and in which they have some expectancy of success.</p>
      </div>
      {/*===== Courses =======*/}

      <CoursesSection />

  

      {/*===== ABOUT US ======= */}

       {/* =======partnership=========== */}

      <Partnership/>

       {/* ======footer========== */}

      
    </div>
  );
};

export default Home;
