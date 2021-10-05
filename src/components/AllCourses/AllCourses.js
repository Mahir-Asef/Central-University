import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';

const AllCourses = () => {
    const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('./university.JSON')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
    return (
        <div>
            <div>
      <Container>
        <h1 className="page-title text-center">Courses</h1>

        <div className=" align-items-center text-center">
          <div className="courses-container ">
            {
              courses.map(course => <Course key={course.id} course={course}></Course>)
            }
          </div>
        </div>
      </Container>
    </div>
        </div>
    );
};

export default AllCourses;