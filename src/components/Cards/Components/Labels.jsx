import React from "react";

const Labels = ({ labelNumber }) => {
  const labels = !!labelNumber && Array.apply(null, Array(labelNumber));

  return (
    <span className="card-label_wrapper">
      {labels.map((val, idx) => (
        <span key={idx} className={`card-label${idx + 1}`} />
      ))}
      {labelNumber > 5 && (
        <span className="label-additionalCount">{`+${labelNumber - 5}`}</span>
      )}
    </span>
  );
};

export default Labels;
