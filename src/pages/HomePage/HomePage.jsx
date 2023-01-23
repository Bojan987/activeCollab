import React from "react";
//mockup data
import { data } from "../../../data/data";
import Row from "../../components/Rows/Row";
import "./Homepage.css";

const HomePage = () => {
  return (
    <div className="homePageLayout">
      {data.map((row) => (
        <Row row={row} />
      ))}
    </div>
  );
};

export default HomePage;
