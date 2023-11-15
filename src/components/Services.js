import React from "react";
import cardData from "../cardData";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h2 className="tab-center">Our Services ▶</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {cardData.map((item, index) => {
                return (
                  <Card
                    key={index}
                    image={item.img}
                    title={item.cardTitle}
                    text={item.cardText}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
