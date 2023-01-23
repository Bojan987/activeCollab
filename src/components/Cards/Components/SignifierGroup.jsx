import React from "react";

const SignifierGroup = ({ signifierNumber }) => {
  return (
    <span className="card-message">
      <svg
        width="10px"
        height="11px"
        viewBox="0 0 10 11"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>3B03DFA6-79AE-40F6-BF37-81DDEF0B3EED</title>
        <g
          id="Zadatak-za-UI-i-FE-developera"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Kanban-"
            transform="translate(-348.000000, -121.000000)"
            fill-rule="nonzero"
          >
            <g id="Column" transform="translate(290.000000, 32.000000)">
              <g id="Task-Card" transform="translate(10.000000, 32.000000)">
                <g
                  id="Signifier-Group"
                  transform="translate(40.000000, 56.000000)"
                >
                  <g id="Group-21" transform="translate(8.000000, 0.000000)">
                    <g
                      id="subtasks_indicator"
                      transform="translate(0.000000, 1.000000)"
                    >
                      <rect
                        id="Rectangle"
                        fill="#8E8E8E"
                        x="2"
                        y="1"
                        width="8"
                        height="1"
                      ></rect>
                      <rect
                        id="Rectangle-Copy"
                        fill="#8E8E8E"
                        x="2"
                        y="5"
                        width="8"
                        height="1"
                      ></rect>
                      <rect
                        id="Rectangle-Copy-2"
                        fill="#8E8E8E"
                        x="2"
                        y="9"
                        width="8"
                        height="1"
                      ></rect>
                      <rect
                        id="Rectangle-Copy-2"
                        stroke="#8E8E8E"
                        transform="translate(1.500000, 9.500000) scale(-1, 1) translate(-1.500000, -9.500000) "
                        x="0.5"
                        y="8.5"
                        width="2"
                        height="2"
                        rx="1"
                      ></rect>
                      <rect
                        id="Rectangle-Copy-4"
                        stroke="#8E8E8E"
                        transform="translate(1.500000, 1.500000) scale(-1, 1) translate(-1.500000, -1.500000) "
                        x="0.5"
                        y="0.5"
                        width="2"
                        height="2"
                        rx="1"
                      ></rect>
                      <rect
                        id="Rectangle-Copy-5"
                        stroke="#8E8E8E"
                        transform="translate(1.500000, 5.500000) scale(-1, 1) translate(-1.500000, -5.500000) "
                        x="0.5"
                        y="4.5"
                        width="2"
                        height="2"
                        rx="1"
                      ></rect>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <span className="label-additionalCount">{`${signifierNumber}`}</span>
    </span>
  );
};

export default SignifierGroup;
