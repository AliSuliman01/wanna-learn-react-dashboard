import React from "react";

export const Card = ({ cardImg, cardName, cardText }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="btn">
        <div className="card" style={{ width: "15rem" }}>
          <img className="card-img-top" src={cardImg} />
          <div className="card-body">
            <h5>{cardName}</h5>
            <p>
              {cardText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
