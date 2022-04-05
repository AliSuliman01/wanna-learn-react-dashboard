import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "./Card";

export const Content = ({ items }) => {
  let {topicId} = useParams()
  console.log(topicId);
  return (
    <div className="content-fluid">
      <div className="row" style={{ height: "91.8vh", overflowY: "scroll" }}>
        {items.map((item) => (
          <Card
            key={item.id}
            cardImg={item.img}
            cardName={item.name}
            cardText={item.description}
          />
        ))}
      </div>
    </div>
  );
};
