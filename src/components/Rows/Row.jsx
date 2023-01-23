import React from "react";
import Card from "../Cards/Card";
import Header from "../Header/Header";

const Row = ({ row }) => {
  return (
    <div className="row-wrapper" key={row.title}>
      <Header title={row.title} cardsNumber={row.cards.length} />
      {row.cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

export default Row;
