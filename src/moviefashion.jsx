//Komponent för ledtråd med video som berättar om fastfashion
import React from "react";
import { Link } from "react-router-dom";
import arrow from "./img/arrow.png";
/*Import av bild för pil som går tillbaka. Link för navigeringen mellan komponenterna*/

export function MovieFashion() {
  
  /*Iframe bäddar in yotubeklippet, koden är hittad på internet och anpassad för oss.*/
  return (
    <div className="fabricWrapper">
      <h1> Vad är fast fashion?</h1>
      <div className="movieBackground">
          <iframe
            width="400"
            height="500"
            src="https://www.youtube.com/embed/WTqJLXCpkiU?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen >
          </iframe>
     </div>
     {/*Tillbaka-knapp*/}
      <Link to="/fashionStore">
        <img src={arrow} alt="Fortsätt" className="arrowBack" />
      </Link>
    </div>
  );
}

export default MovieFashion;