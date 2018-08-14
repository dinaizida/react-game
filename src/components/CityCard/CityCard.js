//sets up the CityCard component
import React from "react";
import "./CityCard.css";

//pass the image into each card so all 12 are rendered
const CityCard = props => (
  <div className="card hoverable " onClick={props.imageClick}>
    {/* <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
    
    <div className = "content">
    <br/>
      <strong>Name :</strong> {props.name}
    </div> */}


    
    <div className=" cardDiv col s12 m6">
      <div className="card light-blue lighten-5">
        <div className="card-content white-text">
          <p><img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} /></p>
        </div>
        <div className="card-action">
          <p className ="cardTitle" >{props.name}</p>
        </div>
      </div>
    
  </div>
   
  </div>
  
);

export default CityCard;