import React from "react";
import Avatar from "../Avatar/Avatar";
import DateComponent from "../Date/DateComponent";
import Labels from "./Components/Labels";
import Messages from "./Components/Messages";
import SignifierGroup from "./Components/SignifierGroup";

const Card = ({ card }) => {
  console.log(card);
  return (
    <div className="card-wrapper">
      <p className="card-title">{card.cardTile}</p>
      <div className="label-wrapper">
        {/* color labels */}
        {card.label && <Labels labelNumber={card.label} />}
        {/* messages icon  */}
        {card.messages && <Messages messagesNumber={card.messages} />}
        {/* signifier icon  */}
        {card.signifierGroup && (
          <SignifierGroup signifierNumber={card.signifierGroup} />
        )}
      </div>
      {/* date start and date due  */}
      <div className="date-wrapper">
        {card.startDate && (
          <DateComponent dueDate={card.dueDate} startDate={card.startDate} />
        )}
        {card.avatars && <Avatar />}
      </div>
    </div>
  );
};

export default Card;
