import React from "react";
import Logo from "../images/logo192.png";
import "./topmenu.scss";

const TopMenu = () => {
  return (
    <div className="d-flex justify-content-between align-items-center top-menu">
      <span className="brand d-flex align-items-center">
        <img src={Logo} alt="" width={50} />
        <h2 className="text-info ms-2">React</h2>
      </span>
      <span className="d-flex flex-column align-items-end">
        <h6 className="mb-0 title">
          <strong>Jhon Wick</strong>
        </h6>
        <p className="text-secondary">
          <small>Developer</small>
        </p>
      </span>
    </div>
  );
};

export default TopMenu;
