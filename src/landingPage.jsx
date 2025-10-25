//Startsidan. Komponent med knapp som tar användaren in i berättelsen.
import React from "react";
import { Link } from "react-router-dom";
import playButton from "./img/play.png";
/*Import av bild för playbutton. Link för navigeringen mellan komponenterna*/

/*Navigering genom link för vid klick på playbutton ta sig till nästa komponent.*/
 export function Play() {
  return (
    <div id="landingPage">
      <p className="landingPage">Start</p>
      <Link to="/info">
        <img src={playButton} alt="Knapp för att starta den interaktiva berättelsen" className="begin" />
      </Link>
    </div>
  );
}

export default Play;