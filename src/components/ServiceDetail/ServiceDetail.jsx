import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/AllService.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const serviceDetials = details?.find((service) => service.id === serviceId);

  return (
    <div className="text-center w-sm-75 w-lg-50 mx-auto card">
      <Card style={{ width: "18rem" }} className="mx-auto m-5">
        <Card.Img variant="top" src={serviceDetials?.img} />
        <Card.Body className="card-body">
          <Card.Title>{serviceDetials?.name}</Card.Title>
          <Card.Text>{serviceDetials?.description}</Card.Text>
          <h5>Charge: {serviceDetials?.price}</h5>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetail;
