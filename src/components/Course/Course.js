import React from "react";
import { Card } from "react-bootstrap";
import './Course.css'

const Course = (props) => {
  const { title, teacher, img, category, description, price } = props.course;
  return (
    <div>
      <Card className="course-card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Title className="card-title">Author :{teacher}</Card.Title>
          <Card.Text className="details">{category}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
