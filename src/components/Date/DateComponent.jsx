import React from "react";

const DateComponent = ({ startDate, dueDate }) => {
  return (
    <div>
      <span className="date">{startDate}</span>
      {dueDate && <span className="date">{` - ${dueDate}`}</span>}
    </div>
  );
};

export default DateComponent;
