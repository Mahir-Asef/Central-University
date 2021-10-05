import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import Course from '../Course/Course';
import './CoursesSection.css'

const CoursesSection = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('./university.JSON')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  return (
    <div>
      <Container>
        <h1 className="page-title text-center">Courses</h1>

        <div className=" align-items-center text-center">
          <div className="courses-container ">
            {
              courses.slice(0,4).map(course => <Course key={course.id} course={course}></Course>)
            }
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CoursesSection;