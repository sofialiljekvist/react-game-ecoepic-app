//Komponent som utgör ledtråd inom secondHand. Visar bild med information om olika material.
import React from "react";
import { Link } from "react-router-dom";
import arrow from "./img/arrow.png";
import fabric from "./img/fabric.png";
/*Import av bilder. Importerar Link för navigeringen mellan komponenterna*/

export function Material() {
  return (
    <div className="fabricWrapper">
      <h1> The list of fabrics</h1>
      <img src={fabric} alt="Materiallista" className="fabricimg" />
      {/*Tillbaka-knapp */}
      <Link to="/secondhand">
        <img src={arrow} alt="Fortsätt" className="arrowBack" />
      </Link>
    </div>
  );
}

export default Material;