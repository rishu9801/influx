import React from "react";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <span className="me-4 bg-white p-2 header-logo">
          <img src="/images/plane.png" alt="" width={50} />
        </span>
        <span className="content">
          <h3 className="">Analytics Dashboard</h3>
          <p className="text-secondary">
            Dashboard is an online report where your website data from
            e-commerce to web analytics is displayed
          </p>
        </span>
      </div>
      <div className="align-self-center d-flex flex-nowrap">
        <button className="btn btn-dark mx-3" type="submit">
          <FontAwesomeIcon icon={faStar} />
        </button>
        <button className="btn btn-success text-white" type="submit">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Create New
        </button>
      </div>
    </div>
  );
};

export default Header;
