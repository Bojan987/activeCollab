import React from "react";

const Messages = ({ messagesNumber }) => {
  return (
    <span className="card-message">
      <svg
        width="11px"
        height="10px"
        viewBox="0 0 11 10"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>23C6ED05-38BB-447B-96FC-DA9E586484B0</title>
        <g
          id="Zadatak-za-UI-i-FE-developera"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Kanban-"
            transform="translate(-32.000000, -218.000000)"
            stroke="#8E8E8E"
          >
            <g id="Column" transform="translate(10.000000, 32.000000)">
              <g id="Task-Card" transform="translate(10.000000, 128.000000)">
                <g id="Messages" transform="translate(12.000000, 56.000000)">
                  <path
                    d="M10.5,2.5 L10.5,9.5 L2.84605353,9.5 L0.5,11.0653169 L0.5,2.5 L10.5,2.5 Z"
                    id="Rectangle"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <span className="label-additionalCount">{`${messagesNumber}`}</span>
    </span>
  );
};

export default Messages;
