import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ index, image, title, text }) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto" key={index}>
        <div class="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text">{text}</p>
            <NavLink
              type="button"
              role="button"
              to="/Contact"
              className="btn btn-primary"
            >
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
