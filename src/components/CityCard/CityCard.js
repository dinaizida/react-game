//sets up the CityCard component

import React from "react";
import "./CityCard.css";

const CityCard = props => (
  <div className="card hoverable " onClick={props.imageClick}>
  
    <div className=" cardDiv col s12 m6">
      <div className="card light-blue lighten-5">
        <div className="card-content white-text">
          {/* //static assets can be imported directly into the source attribute of the Image component using "require" */}
          <p><img alt={props.name} src={require("../../images/" + props.image)} /></p>
        </div>
        <div className="card-action">
          <p className ="cardTitle" >{props.name}</p>
        </div>
      </div>
    
    </div>
   
  </div>
  
);

export default CityCard;