import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
          Founder & CEO at Smile - Limited 
          </h1>
          <div className="popular">
          I am honored to lead Smile - Limited, the company that has invented the Smile-router and is dedicated to inspiring smiles worldwide. Together, we are actively shaping the future, working towards a world where innovation knows no bounds and where the Smile-router empowers people to lead easier lives.
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
