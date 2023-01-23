import React from "react";

const Title = ({ title, cardsNumber }) => {
  return (
    <div>
      <span className="title">{title}</span>
      <span className="title-cardNumber">{`(${cardsNumber})`}</span>
    </div>
  );
};

export default Title;
