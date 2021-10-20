import { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import "./AllService.css";

const AllService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/AllService.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="row d-flex flex-warp g-0 container mx-auto mt-5">
        <div className="col-lg-4 col-sm-12 col-md-12  px-5">
          <div className="course-description service-title mb-3">
            <h1 className="fw-bold fs-1">Services</h1>
            <p className="text-muted">
              <li>Best Doctor service</li>
              <li>24/7 Ambullance Service</li>
              <li>Personal Nurse Service</li>
              <li>Treatment From Home</li>
            </p>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12 col-md-12">
          <div className="row justify-content-md-center mx-auto">
            {services.map((service) => (
              <SingleService key={service.id} service={service}></SingleService>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllService;
