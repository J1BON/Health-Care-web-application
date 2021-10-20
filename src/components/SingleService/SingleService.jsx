import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleService.css";

const SingleService = (props) => {
  const { id, name, img, description } = props.service;
  return (
    <div className="player col-sm-12 col-md-6 col-lg-4 mb-2 p-0">
      <Card style={{ width: "18rem" }} className="border-0 card mx-auto">
        <Card.Img
          variant="top"
          src={img}
          className="img-fluid"
          style={{ height: "211px" }}
        />
        <Card.Body className="card-body">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
          <p className="text-end m-0 p-0 more">
            <Link to={`/service/${id}`}>
              <button className="btn btn-dark">See More</button>
            </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleService;
